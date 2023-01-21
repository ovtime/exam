using Justice.Court.VC.DTO;
using Justice.Court.VC.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Justice.Court.VC.Controllers
{
    [ApiController]
    [Route("api")]
    public class AttendeeController : Controller
    {

        private readonly ILogger<AttendeeController> _logger;

        public AttendeeController(ILogger<AttendeeController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("attendees/{hearingId:int}")]
        public List<Attendee> Get()
        {
            var attendees = new List<Attendee>();
            attendees.Add(new Attendee() { Id = 123, Name = "עו\"ד שושנה שושני", Role = Enums.Roles.Low, RoleDescription = "צד משיב" });
            attendees.Add(new Attendee() { Id = 234, Name = "עו\"ד קובי יעקובי ", Role = Enums.Roles.Low, RoleDescription = "צד עורר" });
            attendees.Add(new Attendee() { Id = 345, Name = "כבוד השופטת ישראל ישראלוף", Role = Enums.Roles.Judge, RoleDescription = "ועדת ערר לענייני קורונה" });
            return attendees;
        }
    }
}
