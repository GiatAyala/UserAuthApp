using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BAL
{
    public interface IUserService
    {
        UserDto Authenticate(string username, string password);
    }
}
