using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AngularMaterialWebshop.Models
{
    public class Product
    {
        public Product ()
        {
            Specs = new List<ProductSpecification>();
        }

        public long Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }

        public int ItemsOnStock { get; set; }

        public List<ProductSpecification> Specs { get; set; }
    }

    public class ProductSpecification {

        public string Key { get; set; }
        public string Value { get; set; }
    }

}
