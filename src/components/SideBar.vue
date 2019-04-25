<template>
  <div id="all">
    <div class="inner-brand">
      <div>
        <font-awesome-icon @click="toggleNav" class="menu" :icon="['fas', 'bars']" size="2x"/>
        <img class="brand" src="../assets/logo.jpeg">
      </div>
    </div>
    <div style="display: flex; flex-direction: row">
      <div class="side-nav" v-show="display">
        <ul class="side-links">
          <li class="list-link">
            <svgicon width="25" height="25" color="#fff" icon="baseline-dashboard-24px"></svgicon>
            <span class="span">Dashboard</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="baseline-shopping_cart-24px"></svgicon>
            <span class="span">Products</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="baseline-description-24px"></svgicon>
            <span class="span">Orders</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="baseline-local_shipping-24px"></svgicon>
            <span class="span">Shipping</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="baseline-insert_chart_outlined-24px"></svgicon>
            <span class="span">Analytics</span>
          </li>
          <li class="list-link">
            <svgicon width="24" height="24" color="#fff" icon="baseline-settings-20px"></svgicon>
            <span class="span">Settings</span>
          </li>
        </ul>
      </div>
      <div class="main">
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
                  <span class="num">234</span>
                </b-col>
                <b-col md="5">
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
                  <span class="num">234</span>
                </b-col>
                <b-col md="5">
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
                  <span class="num">234</span>
                </b-col>
                <b-col md="5">
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
            <table class="table">
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
  name: 'SideBar',
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
.inner-brand {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #1479ee;
  max-width: 240px;
}
.brand {
  border-radius: 30px;
  width: 230px;
  margin: 5px 0px 0px 5px;
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
  padding-top: 50px;
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
  font-weight: 900;
  margin-top: 10px;
}
.top-display {
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
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
  width: 20px;
  text-align: left;
}
thead {
  background: #fafafa;
  color: #e3e3e3;
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
section {
  /* padding: 15px; */
  display: -webkit-flex;
  display: flex;
  -webkit-flex-flow: row;
  flex-flow: row;
  flex-wrap: wrap;
}

article {
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #ececec;
  margin: 10px;
  padding: 20px;
  flex: auto;
  border-radius: 5px;
}

article:first-of-type > button[data-action="start"] {
  display: none;
}

h2,
p {
  margin-bottom: 10px;
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
@media (max-width: 1240px) {
  th:nth-child(2),
  td:nth-child(2),
  th:nth-child(4),
  td:nth-child(4),
  th:nth-child(6),
  td:nth-child(6) {
    display: none;
  }
}

@media (max-width: 920px) {
  .name {
    display: none;
  }
  .main {
    margin: 60px 0 0 0;
    width: 100%;
  }
  .menu {
    display: block;
  }
  .brand {
    display: none;
  }
}

@media (max-width: 605px) {
  .menu {
    display: block !important;
  }
  .brand {
    display: none;
  }
  .inner-brand {
    width: 10px;
  }
}
</style>
