using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUserRepository
    {
        User GetUserByUsernameAndPassword(string username, string password);
    }
}
