using Justice.Court.VC.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static Justice.Court.VC.Models.Enums;

namespace Justice.Court.VC.Controllers
{
    [Route("api")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("user/{userId:int}")]
        public User Get(int userId)
        {
            return new User()
            {
                Id = userId,
                Name = "עו\"ד קובי יעקובי",
                Role = Roles.Low,
                RoleDescription = "צד עורר",
                Permission = Permissions.Attendee
            };
        }

    }
}
