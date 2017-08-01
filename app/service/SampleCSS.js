export const SampleCSS = `body {
  height: 100vh;
  background-color: #fff;
}
.toggle-button {
  cursor: pointer;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  text-align: center;
  max-width: 200px;
  align-self: center;
  display: none;
  position: fixed;
  top: 70px;
}
.toggle-button:hover {
  background-color: #fff;
  color: #3cb371;
}
header {
  width: 25%;
  max-width: 400px;
  min-width: 400px;
  height: 100vh;
  background-color: #3cb371;
  color: #fff;
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 2;
}
header .title {
  display: flex;
  flex-direction: column;
}
header .title h3 {
  padding-right: 15px;
  padding-left: 7px;
  padding-top: 5px;
  text-align: center;
  font-family: 'Monoton', cursive;
  font-size: 2rem;
  display: flex;
  flex-direction: column;
}
header .title h6 {
  font-family: 'Raleway', sans-serif;
}
header .title a {
  color: #fff;
}
.footer {
  font-family: 'Raleway', sans-serif;
  text-align: center;
}
.footer .go-green {
  color: #3cb371;
}
.rbc-base {
  display: flex;
  height: 100%;
  flex-direction: column;
  background-color: #fff;
}
.rbc-resultstats {
  padding: 10px;
}
.rbc.rbc-noresults {
  z-index: 1;
  font-size: 1.5em;
  background-color: #fff !important;
  text-align: center;
}
.rc-slider-mark-text {
  color: #fff;
  width: 32% !important;
  margin-left: -15% !important;
}
.rbc-categorysearch {
  position: fixed;
  z-index: 12;
  width: calc(100% - 410px);
  background-color: #3cb371;
  top: -10px;
  right: 0;
  box-shadow: none;
  padding-bottom: 5px;
  color: #000;
}
.rbc-categorysearch input {
  height: 55px;
}
.rbc-title {
  color: #fff;
}
.Select-value-icon:hover {
  color: #008000 !important;
}
.search-params {
  display: flex;
  width: 90%;
  align-self: center;
  flex-direction: column;
}
.search-params .rbc {
  margin: 0;
}
.search-params .search-filters {
  display: flex;
  flex-direction: column;
  flex: 2;
}
.search-params .rbc-rangeslider {
  background-color: #3cb371;
  box-shadow: none;
  flex: 1;
}
.search-params .rbc-rangeslider .rbc-rangeslider-container {
  padding: 7px;
  padding-right: 16px;
}
.search-params .rbc-rangeslider .rbc-title {
  color: #fff;
  padding-left: 4px;
  margin-top: 10px;
}
.search-params .rbc-rangeslider .rc-slider {
  margin-top: -10px;
}
.search-params .rbc-multidropdownlist {
  background-color: #3cb371;
  box-shadow: none;
  flex: 1;
}
.search-params .rbc-multidropdownlist .rbc-title {
  color: #fff;
}
.search-params .rbc-singledropdownrange {
  background-color: #3cb371;
  box-shadow: none;
  fle: 1;
}
.search-params .rbc-singledropdownrange .rbc-title {
  color: #fff;
}
.search-params .rbc-datasearch {
  background-color: #3cb371;
  box-shadow: none;
  flex: 1;
  color: #000;
}
.search-params .rbc-datasearch .rbc-title {
  color: #fff;
  padding-left: 20px;
}
.rbc-resultcard-scroll-container .rbc-resultcard-item__title {
  padding: 0;
}
.card-layout {
  padding: 5px 0;
  margin: 5px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
}
.card-layout div {
  height: auto !important;
}
.card-layout .card-top {
  width: 100%;
  min-height: 225px;
  justify-content: space-between;
}
.card-layout .card-details {
  display: flex;
  padding: 0 5px;
  width: 100%;
  flex-direction: column;
}
.card-layout .card-bottom {
  display: flex;
  justify-content: space-between;
  height: auto !important;
  padding-bottom: 10px;
}
.card-layout .card-image {
  max-width: 50px;
  border-radius: 50%;
}
.card-layout .card-description {
  width: 90%;
  white-space: normal;
  padding-bottom: 10px;
  letter-spacing: normal;
  flex: 1;
}
.card-layout .card-tags {
  display: flex;
  height: 60px;
  flex-wrap: wrap;
  font-weight: bold;
  justify-content: center;
  flex-direction: row !important;
  margin-bottom: 25px;
  position: relative;
  align-content: center;
}
.card-layout .card-tags .card-tag {
  cursor: pointer;
  padding: 0 2px;
  margin: 2px;
  background-color: #3cb371;
  color: #fff;
  border-radius: 3px;
}
.card-layout .card-tags .card-tag:hover {
  background-color: #008000;
}
.card-layout .card-title {
  padding: 2px;
  padding-bottom: 15px;
  color: #3cb371;
  text-align: center;
  font-size: 20px;
  display: flex;
  width: 90%;
  justify-content: space-around;
}
.card-layout .card-title a {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-layout .card-title:hover {
  color: #008000;
}
.card-layout .card-stars {
  font-size: 1rem;
  padding: 4px;
  font-weight: 700;
  background-color: #eff3f6;
  color: #24292e;
  border-radius: 4px;
  min-width: 110px;
  text-align: center;
  flex-direction: row;
  justify-content: center;
}
.card-layout .card-stars:hover {
  background-color: #008000;
  color: #fff;
}
.card-layout .card-stars .fa {
  margin-right: 10px;
  margin-top: 2px;
}
.card-layout a {
  text-decoration: none;
  color: #3cb371;
  padding: 0 5px;
}
.card-layout a:hover {
  color: #008000;
}
.content {
  flex: 1;
  position: relative;
  top: 90px;
  left: 25%;
  width: 75%;
  height: 100%;
}
.rbc-resultcard-item__title {
  display: none;
}
.rbc-resultcard .rbc-sortoptions {
  margin-right: 1% !important;
  z-index: 1;
}
.rbc-resultcard .rbc-sortoptions select {
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.rbc-resultcard .rbc-resultcard-container {
  box-shadow: none;
  padding: 5px;
  max-height: 100%;
}
.rbc-resultcard .rbc-resultcard-item {
  width: calc(50% - 30px);
  margin: 15px;
  min-height: auto;
  max-width: 430px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.rbc-resultcard .rbc-resultcard-item div {
  display: flex;
  align-items: center;
  height: 100%;
}
.rbc-resultcard .rbc-resultcard-item:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
.rbc-resultcard .rbc-resultcard-item__image {
  display: none !important;
}
.rbc-pagination {
  text-align: center;
}
.react-autosuggest__input {
  color: #008000;
}
@media all and (max-width: 1600px) {
  .content {
    left: 29%;
    width: 70%;
  }
}
@media all and (max-width: 1350px) {
  .content {
    left: 33%;
    width: 67%;
  }
  .rbc-resultcard .rbc-resultcard-item {
    max-width: 350px;
  }
  .card-layout .card-title {
    flex-direction: column;
  }
  .card-layout .card-title a {
    width: 100%;
  }
  .card-layout .card-title .card-image {
    margin-bottom: 10px;
  }
  .card-layout .card-stars {
    min-width: 80px;
  }
  .card-layout .card-top {
    flex-direction: column;
    max-height: auto;
    min-height: 200px;
  }
  .card-layout .card-tags {
    min-height: 80px;
  }
}
@media all and (max-width: 1100px) {
  .title {
    z-index: 4;
    margin-top: -20px;
  }
  .title h3 {
    z-index: 10;
    background-color: #3cb371;
    width: 100%;
  }
  .rbc-categorysearch {
    width: calc(100% - 19em);
    top: 5px;
    right: 10px;
  }
  .rbc-categorysearch input {
    height: 50px;
  }
  .toggle-button {
    display: block;
    margin-top: 10px;
    margin-left: auto;
    margin-right: auto;
    z-index: 4;
  }
  .toggle-button .fa {
    padding-right: 7px;
  }
  .full-header header {
    height: 100vh;
  }
  .full-header header .title {
    height: 70px;
  }
  .full-header header .toggle-button {
    top: 70px;
  }
  .full-header header .search-params .search-filters {
    margin-top: 110px;
    display: flex;
  }
  header {
    width: 100%;
    max-width: 100%;
    height: 140px;
  }
  header .title {
    flex-direction: row;
  }
  header .title h3 {
    position: fixed;
    left: 1.4em;
    flex-direction: row;
    padding-top: 25px;
    padding-bottom: 80px;
  }
  header .search-params .search-filters {
    display: none;
  }
  .content {
    width: 100%;
    left: 0;
    margin-top: 90px;
  }
  .content .rbc-resultcard .rbc-resultstats {
    position: relative;
  }
}
@media all and (max-width: 700px) {
  .rbc-resultcard-scroll-container .rbc-resultcard-item {
    width: 100%;
  }
  .card-layout .card-title {
    max-width: 400px;
  }
  .card-layout .card-description {
    max-width: 400px;
  }
}
@media all and (max-width: 420px) {
  body {
    width: 100%;
  }
  header {
    min-width: auto;
    padding-left: 0;
    padding-right: 0;
    height: 180px;
  }
  header .title {
    margin-top: -20px;
    margin-left: auto;
    margin-right: auto;
  }
  header .title h3 {
    left: 50%;
    transform: translateX(-50%);
    padding-left: 3.2em;
    padding-right: 3.2em;
    width: auto;
    padding-bottom: 115px;
  }
  header .toggle-button {
    display: block;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    z-index: 4;
    align-self: auto;
    left: 50%;
    transform: translateX(-50%);
  }
  header .toggle-button .fa {
    padding-right: 7px;
  }
  .rbc-categorysearch {
    width: calc(100% - 19em);
    top: 50px;
    width: 80%;
    right: 8%;
  }
  .rbc-categorysearch input {
    height: 50px;
  }
  .rbc-resultcard-scroll-container .rbc-resultcard-item__title {
    padding: 0;
  }
  .rbc-resultcard-scroll-container .rbc-resultcard-item__desc {
    padding: 0;
  }
  .card-layout {
    width: 97%;
  }
  .card-layout .card-stars {
    min-width: auto;
  }
  .full-header header .search-params .search-filters {
    margin-top: 140px;
  }
}
`;
