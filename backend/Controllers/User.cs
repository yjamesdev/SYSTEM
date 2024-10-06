using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.DotNet.Scaffolding.Shared.Messaging;
using Microsoft.VisualStudio.Web.CodeGenerators.Mvc.Templates.BlazorIdentity.Pages;

namespace backend.Controllers
{
  [Authorize(Roles = "User")]
  [ApiController]
  [Route("api/[controller]")]
  public class User : ControllerBase
  {
    [HttpGet]
    public IActionResult Get()
    {
      return Ok("You have accessed the User controller");
    }
  }
}
