using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FRDInventory.Models;

namespace FRDInventory.Controllers
{
    [Route("api/controller")]
    [ApiController]
    public class AccountController : Controller
    {
        AccountDataAccessLayer dbAccess = new AccountDataAccessLayer();
        [HttpPost]
        [Route("api/controller/CreateUser")]
        public int CreateUser([FromBody] TblUserLogin user)
        {
            return dbAccess.AddUser(user);

        }

    }
}