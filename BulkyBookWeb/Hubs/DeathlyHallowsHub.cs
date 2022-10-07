using Microsoft.AspNetCore.SignalR;

namespace BulkyBookWeb.Hubs
{
    public class DeathlyHallowsHub : Hub
    {

        public Dictionary<string, int> GetRaceStatus()
        {
            return SD.DealthyHallowRace;
        }
    }
}
