﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularMaterialWebshop.Controllers
{
    public class CartController : Controller
    {
        // GET: Cart
        public ActionResult Checkout()
        {
            return View();
        }
    }
}