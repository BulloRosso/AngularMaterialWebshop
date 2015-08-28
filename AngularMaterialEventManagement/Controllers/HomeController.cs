using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;

namespace AngularMaterialWebshop.Controllers
{

    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Welcome()
        {
            return View();
        }
    }
}
