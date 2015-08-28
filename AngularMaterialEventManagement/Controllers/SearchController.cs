using AngularMaterialWebshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;

namespace AngularMaterialWebshop.Controllers
{
    public class SearchController : Controller
    {
        public ActionResult Index(string Id)
        {
            List<Product> result = new List<Product>();

            result.Add(new Product()
            {
                 Id = 1, 
                 Title = "Runner Two",
                 Description = "Good all terrain shoe with reduced weight footprint. Ideal for advanced athletes.",
                 Price = 39.90m,
                 ItemsOnStock = 0
            });
            result.Add(new Product()
            {
                Id = 2,
                Title = "Trailblazer",
                Description = "Good all terrain shoe with reduced weight footprint. Ideal for advanced athletes.",
                Price = 109.90m,
                ItemsOnStock = 0
            });
            result.Add(new Product()
            {
                Id = 3,
                Title = "Forza Futura",
                Description = "Good all terrain shoe with reduced weight footprint. Ideal for advanced athletes.",
                Price = 89.50m,
                ItemsOnStock = 0
            });

            ViewBag.SearchTerm = Id;

            return View(result);
        }
    }
}
