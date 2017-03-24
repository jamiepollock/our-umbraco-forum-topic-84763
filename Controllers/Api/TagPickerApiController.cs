using System.Collections.Generic;
using Umbraco.Web.WebApi;

namespace My.Website.Controllers.Api
{
    public class TagPickerApiController : UmbracoAuthorizedApiController
    {
        public IEnumerable<object> Get(string tagGroup = "")
        {
            return Services.TagService.GetAllTags(tagGroup);
        }
    }
}