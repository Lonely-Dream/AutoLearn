using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoLearn
{
    internal class PackInformation
    {
        public string version {  get; set; }
        public string message { get; set; }
        public int files_number { get; set; }
        public List<FileInformation> files { get; set; }
    }
}
