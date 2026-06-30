using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoLearn
{
    internal class SourceConfig
    {
        [JsonProperty("sourceUrl")]
        public string SourceUrl { get; set; }

        [JsonProperty("defaultUrl")]
        public string DefaultUrl { get; set; }
    }
}
