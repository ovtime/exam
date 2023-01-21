using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Justice.Court.VC.Models
{
    public class Enums
    {
        public enum Roles
        {
            Judge = 1,
            Low = 2
        }

        public enum Permissions
        {
            Admin = 1,
            Attendee = 2  // TODO: rename permission description
        }
    }
}
