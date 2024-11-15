using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public class UserRepository : IUserRepository
    {
        private readonly UserDbContext _context;

        public UserRepository(UserDbContext context)
        {
            _context = context;
        }

        public User GetUserByUsernameAndPassword(string username, string password)
        {
            
            return _context.Users.FirstOrDefault(u => u.Username == username && u.PasswordHash == password);
        }
    }

}
