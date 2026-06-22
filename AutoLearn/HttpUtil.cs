using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoLearn
{
    internal static class HttpUtil
    {
        private static readonly HttpClient httpClient = new HttpClient();

        public static async Task<T?> GetAsync<T>(string url)
        {
            try
            {
                HttpResponseMessage response = await httpClient.GetAsync(url);
                response.EnsureSuccessStatusCode();
                string jsonString = await response.Content.ReadAsStringAsync();

                // 反序列化
                return JsonConvert.DeserializeObject<T>(jsonString);
            }
            catch (Exception ex)
            {
                Log.Error($"[HttpUtil]HTTP GET request to {url} failed.", ex);
                throw;
            }
        }
    }
}
