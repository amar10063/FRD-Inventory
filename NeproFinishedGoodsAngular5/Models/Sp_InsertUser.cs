using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FRDInventory.Models
{
    public class Sp_InsertUser
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
    }
}
