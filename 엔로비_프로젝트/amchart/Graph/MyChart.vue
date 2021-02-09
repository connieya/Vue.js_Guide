<template>
    <div class="FiveDaysForecast">
        <div class="tabs is-fullwidth">
            <ul>
                <li><router-link to="OneDayForecast"><span class="icon is-small"><i class="fas fa-cloud"></i></span>One day forecast</router-link></li>
                <li class="is-active"><router-link to="FiveDaysForecast"><span class="icon is-small"><i class="fas fa-cloud"></i></span>Five days forecast</router-link></li>
                <li><router-link to="FilterByDate"><span class="icon is-small"><i class="fas fa-calendar-alt"></i></span>Filter forecast by date</router-link></li>
            </ul>
        </div>
        <h1>FIVE DAYS FORECAST</h1>
        <form>
            <div class="box">
                <div class="field">
                    <div class="control">
                        <input class="input is-rounded" type="text" placeholder="Place" v-model="place">
                    </div>
                    <br>
                    <div class="control">
                        <input class="input is-rounded" type="text" placeholder="Country" v-model="country">
                    </div>
                    <br>
                    <div class="control">
                        <input class="input is-rounded" type="text" placeholder="Unit of measure (Celsius = 'metric' | Fahrenheit = 'imperial')" v-model="unitOfMeasure" required>
                    </div>
                    <br>
                    <div class="control">
                        <input class="input is-rounded" type="text" placeholder="Latitude" v-model="latitude">
                    </div>
                    <br>
                    <div class="control">
                        <input class="input is-rounded" type="text" placeholder="Longitude" v-model="longitude">
                    </div>
                </div>
                <button class="button is-medium is-rounded" @click="getFiveDaysForecast">Search</button>
            </div>
        </form>
        <br>
        <table class="table is-narrow">
            <thead>
                <tr>
                    <th>Temperature</th>
                    <th>TemperatureMin</th>
                    <th>TemperatureMax</th>
                    <th>Humidity</th>
                    <th>Pressure</th>
                    <th>Time</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="forecast in forecastData" :key="forecast.Pressure">
                    <td>{{forecast.temperature}}</td>
                    <td>{{forecast.temperatureMin}}</td>
                    <td>{{forecast.temperatureMax}}</td>
                    <td>{{forecast.humidity}}</td>
                    <td>{{forecast.pressure}}</td>
                    <td>{{forecast.timeStamp}}</td>
                </tr>
            </tbody>
        </table>
        <line-chart
          :chart-data="tempRows"
          :chartLabels="weatherDate"
        ></line-chart>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FiveDaysForecast",
  data() {
    return {
      place: "",
      country: "",
      unitOfMeasure: "",
      latitude: "",
      longitude: "",

      forecastData: [],
      temperature: [],
      weatherDate: [],
      tempRows: []
    };
  },
  methods: {
    getFiveDaysForecast() {
      axios({
        method: "get",
        url: "http://localhost:55556/api/ForecastActions/fiveDaysForecast",
        params: {
          Place: this.place,
          Country: this.country,
          UnitOfMeasure: this.unitOfMeasure,
          Lat: this.latitude,
          Lon: this.longitude
        }
      })
        .then(response => {
          console.log(response);
          this.forecastData = response.data;

          this.forecastData.forEach(item => {
            var tempArray = [];
  
            this.tempRows.push(item.temperature);
            this.weatherDate.push(item.timeStamp);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
.FiveDaysForecast {
  width: 1200px;
  margin: 30px auto;
}
.tabs {
  width: 600px;
  margin-left: auto;
  margin-right: auto;
}
h1 {
  font-size: 50px;
}
#forecast-params {
  margin-top: 30px;
  margin-bottom: 50px;
  text-align: left;
  font-size: 20px;
}

.param-names {
  font-weight: bold;
  color: black;
  font-size: 20px;
}
.box {
  background-color: transparent;
  width: 600px;
  margin: 0 auto;
  border: 3px solid royalblue;
  box-shadow: 0px 0px 30px royalblue;
}

::placeholder {
  color: rgb(170, 170, 170);
}
input,
button {
  background-color: #fcfcfc;
  border: 2px solid rgb(170, 170, 170);
}
input:focus {
  border: 2px solid royalblue;
  box-shadow: 0px 0px 30px royalblue;
}
input:hover {
  border: 2px solid royalblue;
}
button:focus {
  border: 2px solid royalblue;
  box-shadow: 0px 0px 30px royalblue;
}
button:hover {
  border: 2px solid royalblue;
}
.table {
  margin: 0 auto;
  width: 1000px;
}
td,
th {
  text-align: center;
}
thead {
  font-size: 20px;
  display: table-header-group;
  vertical-align: middle;
  border-bottom: 3px solid royalblue !important;
}
tr {
  font-weight: 600;
  transition: background-color 0.5s ease;
}
tr:hover {
  background-color: rgb(153, 179, 255);
}
#chart {
  display: inline-block;
  padding: 0px;
  margin: 0px;
}
#tempChart {
  padding: 0 auto;
}
#charts {
  padding: 0px auto;
}
</style>