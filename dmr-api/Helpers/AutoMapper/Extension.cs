using DMR_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
namespace DMR_API.Helpers.AutoMapper
{
    public static class Extension
    {
        public static DateTime ExpriedTime(this ICollection<GlueIngredient> glueIngredients)
        {
            if (glueIngredients.FirstOrDefault(a => a.Position == "A") == null) return DateTime.MinValue;
            var ingredient = glueIngredients.FirstOrDefault(a => a.Position == "A").Ingredient;
            if (ingredient.ExpiredTime == 600)
            {
                return DateTime.MinValue;
            }
            else
            {
                if (ingredient.CreatedDate.IsNullOrEmpty())
                {
                    return DateTime.MinValue;
                }

                var createdTime = Convert.ToDateTime(ingredient.CreatedDate);
                return createdTime.AddMinutes(ingredient.ExpiredTime);
            }
        }
    }
}