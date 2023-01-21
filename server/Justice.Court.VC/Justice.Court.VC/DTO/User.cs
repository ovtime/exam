using Justice.Court.VC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Justice.Court.VC.DTO
{
    public class User
    {
        public int Id { get; set; }
        public string Name { get; internal set; }
        public Enums.Roles Role { get; internal set; }
        public string RoleDescription { get; internal set; }
        public Enums.Permissions Permission { get; internal set; }
    }
}
