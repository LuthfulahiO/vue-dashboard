<template>
  <div id="all">
    <div class="logo-container">
      <div>
        <font-awesome-icon @click="toggleNav" class="menu" :icon="['fas', 'bars']" size="2x"/>
        <svgicon class="logo-spec" color="#1479ee" icon="logo"></svgicon>
      </div>
    </div>
    <div style="display: flex; flex-direction: row">
      <div class="side-nav" v-show="display">
        <ul class="side-links">
          <li class="list-link">
            <svgicon width="25" height="25" color="#fff" icon="dashboard"></svgicon>
            <span class="span">Dashboard</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="shopping_cart"></svgicon>
            <span class="span">Products</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="description"></svgicon>
            <span class="span">Orders</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="local_shipping"></svgicon>
            <span class="span">Shipping</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="chart_outlined"></svgicon>
            <span class="span">Analytics</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="settings"></svgicon>
            <span class="span">Settings</span>
          </li>
        </ul>
        <font-awesome-icon class="comments" :icon="['fas', 'comments']" size="3x"/>
      </div>
      <div class="main">
        <b-row style="margin-bottom:30px;">
          <b-col md="4">
            <h2 style="float:left; color:#1479ee;">Orders</h2>
          </b-col>
          <b-col md="5"></b-col>
          <b-col md="3">
            <b-input type="text" value="12/02/19 - 13/03/19" class="inputIcn"></b-input>
          </b-col>
        </b-row>
        <b-row style="margin-bottom:20px;">
          <b-col md="4">
            <b-card>
              <b-row>
                <b-col style="text-align:left;" md="6">
                  <span>Number of Orders</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="7">
                  <span class="num">{{analytics.total.total}}</span>
                  <br>
                  <i style="color:#ff4141" class="num2">
                    <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    {{analytics.total.diff}}%
                  </i>
                </b-col>
                <b-col md="5" class="chart">
                  <svgicon width="100%" color="#3CC480" height="40" icon="Bar Chart-1"></svgicon>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card>
              <b-row>
                <b-col style="text-align:left;" md="6">
                  <span>Completed Orders</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="7">
                  <span class="num">{{analytics.completed.total}}</span>
                  <br>
                  <i style="color:#3cc480" class="num2">
                    <font-awesome-icon :icon="['fas', 'arrow-up']"/>
                    {{analytics.completed.diff}}%
                  </i>
                </b-col>
                <b-col md="5" class="chart">
                  <svgicon width="100%" color="#55D8FE" height="40" icon="Bar Chart-1"></svgicon>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card>
              <b-row>
                <b-col style="text-align:left;" md="6">
                  <span>Abandoned Orders</span>
                </b-col>
              </b-row>
              <b-row>
                <b-col md="7">
                  <span class="num">{{analytics.abandoned.total}}</span>
                  <br>
                  <i style="color:#ff4141" class="num2">
                    <font-awesome-icon :icon="['fas', 'arrow-down']"/>
                    {{analytics.abandoned.diff}}%
                  </i>
                </b-col>
                <b-col md="5" class="chart">
                  <svgicon width="100%" color="#FF4141" height="40" icon="Bar Chart-1"></svgicon>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>

        <div id="user">
          <div class="top-display">
            <span style=" font-size: 20px">Orders History</span>
          </div>
          <div>
            <table class="table table-responsive">
              <thead>
                <tr>
                  <th>ORDER ID</th>
                  <th>DESCRIPTION</th>
                  <th>PAYMENT METHOD</th>
                  <th>SHIPPING METHOD</th>
                  <th>DATE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="i in items" :key="i.id">
                  <td>{{i.id}}</td>
                  <td>{{i.description}}</td>
                  <td>{{i.payment_method}}</td>
                  <td>{{i.shipping_method}}</td>
                  <td>{{i.date}}</td>
                  <td>
                    <span v-if="i.id === '0001'" class="red">{{i.status}}</span>
                    <span v-else-if="i.id === '0003'" class="green">{{i.status}}</span>
                    <span v-else class="blue">{{i.status}}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

import '../assets/icons';

export default {
  name: 'DashBoard',
  data() {
    return {
      display: true,
      active: 'institution',
      name: '',
      items: [
        { id: '0001', description: 'American Eagle Classic Women Ball Sneakers Shoe', payment_method: 'Paystack', shipping_method: 'MAX.NG', status: 'Abandoned', date: '12/12/2001' },
        { id: '0002', description: 'American Eagle Classic Women Ball Sneakers Shoe', payment_method: 'Paystack', shipping_method: 'MAX.NG', status: 'In Transit', date: '12/12/2001' },
        { id: '0003', description: 'American Eagle Classic Women Ball Sneakers Shoe', payment_method: 'Flutterwave', shipping_method: 'MAX.NG', status: 'Completed', date: '12/12/2001' },
      ],
      analytics: {
        total: {
          id: 1, diff: 18.3, total: 234,
        },
        completed: {
          id: 0, diff: 18.3, total: 234,
        },
        abandoned: {
          id: 1, diff: 18.3, total: 234,
        },
      },
    };
  },
  methods: {
    toggleNav() {
      this.display = !this.display;
    },
  },
};
</script>
<style scoped>
#all {
  overflow-y: hidden;
  height: 100%;
  background-color: #fafafa;
}
.logo-container {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #1479ee;
  max-width: 240px;
  position: fixed;
  z-index: 30;
}
.logo-spec {
  border-radius: 30px;
  width: 230px;
  margin: 5px 0px 0px 5px;
  background: white;
  color: #1479ee;
}
.side-nav {
  height: 100vh;
  background: #1479ee;
  min-width: 240px;
  max-width: 240px;
  display: block;
  position: fixed;
  z-index: 3;
  padding-right: 10px;
  padding-top: 110px;
}
.side-links {
  list-style: none;
  padding-left: 50px;
  text-align: left;
  font-size: 20px;
}
.icn {
  display: block;
}
.list-link {
  padding: 12px 0;
}
.span {
  color: rgb(255, 255, 255) !important;
  /* font-size: 17px; */
  display: inline-block;
}
.menu {
  display: none;
  color: white;
  margin: 5px 0;
  cursor: pointer;
}
.main {
  margin: 60px 0 0 240px;
  padding: 20px;
  width: 100%;
}
#user {
  width: 100%;
  background: white;
  padding: 20px;
}
.num {
  float: left;
  font-size: 24px;
  font-weight: 500;
  margin-top: 10px;
}
.num2 {
  float: left;
  margin-left: -43px;
  margin-top: 20px;
  font-size: 12px;
  font-style: normal;
}
.chart {
  margin-top: 17px;
}
.top-display {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
}
.comments {
  color: white;
  margin: calc(100% / 2);
}
td span {
  border-radius: 70px;
  background: #ff4141;
  color: #fafafa;
  font-size: 12px;
  padding: 3px 17px 3px 17px;
}
.table {
  background-color: white;
}
td {
  width: 24%;
  text-align: center;
}
td:nth-child(2) {
  color: #1479ee;
  text-align: left;
}
thead {
  background: #fafafa;
  color: #a7a0a0;
}
.buttons:hover {
  background: #fff;
  color: #55d8fe;
}
.border-line {
  border-right: 2px solid #333333;
}
.green {
  background: #3cc480;
}
.red {
  background: #ff4141;
}
.blue {
  background: #55d8fe;
}
.inputIcn {
  background: white url(./../assets/calendar.svg) no-repeat scroll 7px 7px;
  border-radius: 10px;
  padding-left: 30px;
  border: 1px solid #1479ee;
  width: 195px !important;
}

@media screen and (max-width: 990px) {
  article {
    flex: 30%;
  }
  article:last-of-type {
    flex: none;
    flex-basis: calc((100% - 120px) / 2);
  }
}

@media (max-width: 920px) {
  .main {
    margin: 60px 0 0 0;
    width: 100%;
  }
  .menu {
    display: block;
  }
  .logo-spec {
    display: none;
  }
}

@media (max-width: 605px) {
  .menu {
    display: block !important;
  }
  .logo-spec {
    display: none;
  }
  .logo-container {
    width: 10px;
  }
}
</style>
