using AngularMaterialWebshop.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularMaterialWebshop.Controllers
{
    public class ProductController : Controller
    {
        // GET: Product
        public ActionResult Index()
        {
            Product model = new Product()
            {
                Id = 1,
                Title = "Runner Two",
                Description = "Ein Schuh wie aus dem Bilderbuch: Hochwertige Materialien verknüpft mit Top-Design! Da werden Sie der Star auf der Laufstrecke und selbst im tiefsten Wald.",
                Price = 39.90m,
                ItemsOnStock = 0,
                Specs = new List<ProductSpecification>()
                {
                    new ProductSpecification()
                    {
                        Key = "",
                        Value = "erhältlich bis Größe 50"
                    },
                    new ProductSpecification()
                    {
                        Key = "",
                        Value = "formschön und langlebig"
                    },
                    new ProductSpecification()
                    {
                        Key = "",
                        Value = "prämiert mit dem Prix de Oro 2015"
                    },
                    new ProductSpecification()
                    {
                        Key = "",
                        Value = "mehre Farbvarianten zur Auswahl"
                    },
                }
            };

            return View(model);
        }
    }
}