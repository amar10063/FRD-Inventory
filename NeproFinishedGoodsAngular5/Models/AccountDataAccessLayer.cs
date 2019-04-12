using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Data.SqlClient;
using FRDInventory.Models;



namespace FRDInventory.Models
{
    public class AccountDataAccessLayer
    { 
        
        
        FRDInventoryContext db = new FRDInventoryContext();
        public int AddUser(TblUserLogin user)
        {
            try
            {
                string pass = string.Empty;
                string pwdKey = string.Empty;
                if (user.Password.Trim() != "")
                {

                    pass = DbSecurity.Encrypt(user.Password, ref pwdKey);
                }
                var querytype = new SqlParameter("@QueryType", "SaveBindInvetoryUser");
                var username = new SqlParameter("@UserName", user.UserName);
                var emailid = new SqlParameter("@EmailId",user.EmailId);
                var password = new SqlParameter("@Password",pass);
                var passwordKey = new SqlParameter("@Password", pwdKey);
                var userpin = new SqlParameter("@UserPin",user.UserPin);
                var storepicker = new SqlParameter("@StorePicker",user.StorePicker);
                var controller = new SqlParameter("@Controller",user.InventoryController);
                
               
                db.TblUserLogin.FromSql("Sp_DeviceUser ,@QueryType,@UserName,@EmailId,@Password,@PasswordKey, @UserPin,@StorePicker,@Controller", querytype, username, emailid, password, passwordKey, userpin, storepicker, controller);

                
                db.SaveChanges();
               
                return 1;
            }
            catch
            {
                throw;
            }
        }
    }
}
