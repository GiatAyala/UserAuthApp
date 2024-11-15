using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public UserDto Authenticate(string username, string password)
        {
            var user = _userRepository.GetUserByUsernameAndPassword(username, password);
            if (user == null)
            {
                return null; // מחזיר null אם המשתמש לא נמצא
            }

            // ממיר את ה-User ל-UserDto
            return new UserDto
            {
                Id = user.Id,
                Username = user.Username,
                FullName = user.FullName,
                Email = user.Email,
                Role = user.Role
            };
        }
    }

}
