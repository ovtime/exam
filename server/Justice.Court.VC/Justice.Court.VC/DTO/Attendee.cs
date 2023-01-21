using Justice.Court.VC.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Justice.Court.VC.DTO
{
    public class Attendee
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public Enums.Roles Role { get; set; }

        public string RoleDescription { get; set; }

    }
}
