using BAL;
using DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace WebApplication3.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class AuthenticateController : ControllerBase
    {
        private readonly IUserService _userService;

        public AuthenticateController(IUserService userService)
        {
            _userService = userService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] DTO.LoginRequest request)
        {
            var userDto = _userService.Authenticate(request.Username, request.Password);
            if (userDto == null)
            {
                return Unauthorized(new { message = "המשתמש לא נמצא במערכת" });
            }

            var token = GenerateJwtToken(userDto);
            return Ok(new { token});
            //return Ok(new { token, userDetails = userDto });
        }

        private string GenerateJwtToken(UserDto user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes("YourSuperLongSecretKey1234567890");
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Role, user.Role),
                new Claim("FullName", user.FullName)
            }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

}
