using Justice.Court.VC.DTO;
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
    public class HearingController : ControllerBase
    {


        private readonly ILogger<HearingController> _logger;

        public HearingController(ILogger<HearingController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("hearing/{hearingId:int}")]
        public Hearing Get(int hearingId)
        {
            return new Hearing()
            {
                Id = hearingId,
                Title = "משרד המשפטים, ועדת ערר לענייני קורונה - השתתפות בהוצאות קבועות",
                CaseNumber = "64949-02-22"
            };
        }
    }
}
