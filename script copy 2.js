const preloader = document.getElementById("preloader");
const maincontainer = document.getElementById("main_container");
window.addEventListener("load", () => {
  preloader.classList.remove("flex");
  preloader.classList.add("hidden");
  maincontainer.classList.remove("hidden");
});
const scroll = document.getElementsByClassName("scroller")[0];
const scrollLength = scroll.scrollWidth - scroll.clientWidth;

function checkScroll() {
  const leftbtn = document.getElementsByClassName("left-btn")[0];
  const rightbtn = document.getElementsByClassName("right-btn")[0];
  const scrollLength = scroll.scrollWidth - scroll.clientWidth;
  const currentScroll = scroll.scrollLeft;
  if (currentScroll === 0) {
    leftbtn.setAttribute("disabled", "true");
    rightbtn.removeAttribute("disabled");
  } else if (
    Math.round(currentScroll) === scrollLength ||
    Math.round(currentScroll) === scrollLength - 1
  ) {
    leftbtn.removeAttribute("disabled");
    rightbtn.setAttribute("disabled", "true");
  } else {
    leftbtn.removeAttribute("disabled");
    rightbtn.removeAttribute("disabled");
  }

  const color = document.getElementsByClassName("btn-color");
  for (let i = 0; i < color.length; i++) {
    if (color[i].hasAttribute("disabled")) {
      color[i].style.color = "#D6D3D1";
    } else {
      color[i].style.color = "black";
    }
  }
}

scroll.addEventListener("scroll", checkScroll);
window.addEventListener("resize", checkScroll);
checkScroll();

function leftscroll() {
  scroll.scrollBy({ left: -200, behavior: "smooth" });
}
function rightscroll() {
  scroll.scrollBy({ left: 200, behavior: "smooth" });
}

const nextdays = document.getElementsByClassName("next-btn")[0];
const week = document.getElementsByClassName("week")[0];
const today = document.getElementsByClassName("today")[0];
const para = document.getElementsByClassName("next-para")[0];

nextdays.addEventListener("click", () => {
  today.classList.toggle("active");
  nextdays.classList.toggle("active");
  if (today.classList.contains("active")) {
    today.classList.remove("hidden");
    today.classList.add("flex");
    week.classList.remove("flex");
    week.classList.add("hidden");
  } else {
    today.classList.add("hidden");
    today.classList.remove("flex");
    week.classList.add("flex");
    week.classList.remove("hidden");
  }

  if (nextdays.classList.contains("active")) {
    para.innerHTML = "Today";
  } else {
    para.innerHTML = "Next days";
  }
});

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");

const weekdiv1 = document.getElementById("week_div1");
const weekdiv2 = document.getElementById("week_div2");
const weekdiv3 = document.getElementById("week_div3");
const weekdiv4 = document.getElementById("week_div4");
const weekdiv5 = document.getElementById("week_div5");
const weekdiv6 = document.getElementById("week_div6");
const weekdiv7 = document.getElementById("week_div7");

const humidity = document.getElementsByClassName("humidity");
const wind = document.getElementsByClassName("wind");
const precipitation = document.getElementsByClassName("precipitation");
const uv_index = document.getElementsByClassName("uv_index");
const feels_like = document.getElementsByClassName("feels_like");
const feel = document.getElementsByClassName("feel_like");
const dew = document.getElementsByClassName("dew");
const visibility = document.getElementById("visibility");
const sunrise = document.getElementById("sunrise");
const sunset = document.getElementById("sunset");
const moonphase = document.getElementById("moonphase");
const updatetime = document.getElementsByClassName("update_time");
const update1time = document.getElementsByClassName("update1_time");
const updatetemp = document.getElementsByClassName("update_temp");
const update1temp = document.getElementsByClassName("update1_temp");
const updateimg = document.getElementsByClassName("update_img");
const update1img = document.getElementsByClassName("update1_img");
const updatetext = document.getElementsByClassName("update_text");
const update1text = document.getElementsByClassName("update1_text");
const weektemp = document.getElementsByClassName("week_temp");
const weekimg = document.getElementsByClassName("week_img");
const weektext = document.getElementsByClassName("week_text");
const weektime = document.getElementsByClassName("week_time");
const date = document.getElementsByClassName("date")[0];
const day = document.getElementsByClassName("day")[0];
const week1temp = document.getElementsByClassName("week1_temp");
const week1img = document.getElementsByClassName("week1_img");
const week1text = document.getElementsByClassName("week1_text");
const week1time = document.getElementsByClassName("week1_time");
const todaytemp = document.getElementsByClassName("today_temp")[0];
const change = document.getElementsByClassName("change");
const perc = document.getElementsByClassName("perc");
const perc1 = document.getElementsByClassName("perc1");
const weekperc = document.getElementsByClassName("week_perc");
const weekperc1 = document.getElementsByClassName("week_perc1");
let checkbox = document.getElementById("mycheck");
let todaycondition = document.getElementById("today_condition");
let days = document.getElementById("days");
let weekdays = document.getElementById("week_days");
let searchchange = document.getElementById("search_change");
let mic = document.getElementById("mic");
let close = document.getElementById("close");
let searchbox = document.getElementById("search_box");
let searchbtn = document.getElementById("search_btn");
let maincontent = document.getElementById("main_content");
let backbtn = document.getElementById("back_btn");
let mainlist = document.getElementById("main_list");
let uppertext = document.getElementById("upper_text");
let dayupdate = document.getElementById("day_update");
const places = document.getElementsByClassName("places")[0];
const emailinput = document.getElementsByClassName("email_input")[0];
const grayh = document.getElementById("gray_h");
const uppergray = document.getElementById("upper_gray");
const newupper = document.getElementsByClassName("new_upper")[0];
const speakbar = document.getElementById("speak_bar");
const subsearch = document.getElementById("sub_search");
const speakicon = document.getElementById("speak_icon");
const newspeakicon = document.getElementById("new_speak_icon");
const trya = document.getElementById("try");
const tryagain = document.getElementById("try_again");
const mainsearch = document.getElementById("main_search");
const words = document.getElementById("words");
const searchgif = document.getElementById("search_gif");

searchchange.addEventListener("focus", () => {
  mainsearch.style.border = "1px solid blue";
});
searchchange.addEventListener("blur", () => {
  mainsearch.style.border = "none";
});
mic.addEventListener("click", () => {
  mainsearch.style.border = "1px solid blue";
});
function clearinput() {
  emailinput.value = " ";
}
fetchsecond("NewDelhi");
async function fetchfirst(callback) {
  const apiUrls = [
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Andaman%20%26%20Nicobar%20Islands.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Andhra%20Pradesh.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Arunachal%20Pradesh.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Assam.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Bihar.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Chandigarh.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Chhattisgarh.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Dadra%20%26%20Nagar%20Haveli.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Daman%20%26%20Diu.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Delhi.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Goa.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Gujarat.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Haryana.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Himachal%20Pradesh.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Jammu%20%26%20Kashmir.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Jharkhand.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Karnataka.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Kerala.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Lakshadweep.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Madhya%20Pradesh.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Maharashtra.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Manipur.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Meghalaya.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Mizoram.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Nagaland.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Odisha.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Puducherry.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Punjab.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Rajasthan.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Sikkim.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Tamil%20Nadu.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Telangana.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Tripura.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/Uttarakhand.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/master/By%20States/West%20Bengal.json",
    "https://raw.githubusercontent.com/pranshumaheshwari/indian-cities-and-villages/refs/heads/master/By%20States/Uttar%20Pradesh.json",
  ];
  async function fetchMultipleapis(apiUrls) {
    const responses = await Promise.all(apiUrls.map((url) => fetch(url)));
    const rdata = await Promise.all(
      responses.map((response) => response.json())
    );
    const apiData = [];
    apiUrls.forEach((url, index) => {
      apiData[index] = rdata[index];
    });
    return apiData;
  }
  const data = await fetchMultipleapis(apiUrls);
  let onetime = true;
  mic.addEventListener("click", () => {
    if (words.classList.contains("hidden")) {
      words.classList.remove("hidden");
      words.classList.add("flex");
      trya.classList.add("hidden");
      trya.classList.remove("flex");
    }
    if (speakbar.classList.contains("hidden")) {
      speakbar.classList.remove("hidden");
      uppertext.classList.add("hidden");
    }
    newspeakicon.classList.add("hidden");
    speakicon.classList.remove("hidden");
    if (onetime) {
      start();
      onetime = false;
      endtime();
    }
  });
  window.onload = function () {
    onetime = true;
  };
  subsearch.addEventListener("click", () => {
    end();
    if (uppertext.classList.contains("hidden")) {
      speakbar.classList.add("hidden");
      uppertext.classList.remove("hidden");
    }
    searchchange.value = "";
    onetime = true;
    mainsearch.style.border = "none";
    const searchValue = searchchange.value.trim();
    search(searchValue);
  });
  speakbar.addEventListener("click", (e) => {
    e.stopPropagation();
  });
  speakicon.addEventListener("click", () => {
    end();
    newspeakicon.classList.remove("hidden");
    speakicon.classList.add("hidden");
    if (trya.classList.contains("hidden")) {
      trya.classList.remove("hidden");
      trya.classList.add("flex");
      words.classList.add("hidden");
      words.classList.remove("flex");
    }
  });
  newspeakicon.addEventListener("click", () => {
    newspeakicon.classList.add("hidden");
    speakicon.classList.remove("hidden");
    if (words.classList.contains("hidden")) {
      words.classList.add("flex");
      words.classList.remove("hidden");
      trya.classList.remove("flex");
      trya.classList.add("hidden");
    }
    start();
    endtime();
  });
  tryagain.addEventListener("click", () => {
    newspeakicon.classList.add("hidden");
    speakicon.classList.remove("hidden");
    if (words.classList.contains("hidden")) {
      words.classList.add("flex");
      words.classList.remove("hidden");
      trya.classList.remove("flex");
      trya.classList.add("hidden");
    }
    start();
    endtime();
  });
  function endtime() {
    setTimeout(() => {
      end();
      newspeakicon.classList.remove("hidden");
      speakicon.classList.add("hidden");
      if (trya.classList.contains("hidden")) {
        trya.classList.remove("hidden");
        trya.classList.add("flex");
        words.classList.add("hidden");
        words.classList.remove("flex");
      }
      onetime = true;
    }, 10000);
  }
  const recognition = new window.webkitSpeechRecognition();
  recognition.onresult = (e) => {
    for (let i = e.resultIndex; i < e.results.length; i++) {
      if (e.results[i].isFinal) {
        let transcript = e.results[i][0].transcript;
        searchchange.value = transcript;
        if (searchchange.value !== "") {
          mic.classList.remove("flex");
          mic.classList.add("hidden");
          close.classList.remove("hidden");
          close.classList.add("flex");
          uppertext.innerHTML = "Enter a location name";
        } else {
          mic.classList.remove("hidden");
          mic.classList.add("flex");
          close.classList.remove("flex");
          close.classList.add("hidden");
        }
        searchValue = transcript;
        if (transcript.trim() !== "") {
          end();
          if (uppertext.classList.contains("hidden")) {
            speakbar.classList.add("hidden");
            uppertext.classList.remove("hidden");
          }
          search(searchValue);
        }
      }
    }
  };
  function start() {
    recognition.start();
  }
  function end() {
    recognition.stop();
  }

  let location = [];
  let districts = [];
  let subdistricts = [];
  let villages = [];
  location.push(districts);
  location.push(subdistricts);
  location.push(villages);
  for (let stateIndex = 0; stateIndex < data.length; stateIndex++) {
    let state = data[stateIndex];
    for (
      let districtIndex = 0;
      districtIndex < state.districts.length;
      districtIndex++
    ) {
      let district = state.districts[districtIndex];
      districts.push(`${district.district} ${state.state}`);
      for (
        let subDistrictIndex = 0;
        subDistrictIndex < district.subDistricts.length;
        subDistrictIndex++
      ) {
        let subDistrict = district.subDistricts[subDistrictIndex];
        subdistricts.push(
          `${subDistrict.subDistrict} ${district.district} ${state.state}`
        );
        for (
          let villageIndex = 0;
          villageIndex < subDistrict.villages.length;
          villageIndex++
        ) {
          let village = subDistrict.villages[villageIndex];
          villages.push(
            `${village} ${subDistrict.subDistrict} ${district.district} ${state.state}`
          );
        }
      }
    }
  }
  function loader(val) {
    if (val === true) {
      uppertext.classList.add("hidden");
      uppertext.classList.remove("flex");
      searchgif.classList.remove("hidden");
    } else {
      uppertext.classList.remove("hidden");
      uppertext.classList.add("flex");
      searchgif.classList.add("hidden");
    }
  }
  searchchange.addEventListener("keyup", () => {
    const searchValue = searchchange.value.trim();
    loader(true);
    search(searchValue);
  });

  function search(searchValue) {
    mainlist.innerHTML = "";
    if (searchValue === "") {
      mainlist.classList.add("hidden");
      newupper.classList.remove("hidden");
    } else {
      mainlist.classList.remove("hidden");
      newupper.classList.add("hidden");
    }
    let matchFound = false;
    let resultcount = 0;
    for (let i = 0; i < location.length && resultcount < 5; i++) {
      for (let j = 0; j < location[i].length; j++) {
        if (
          location[i][j].toLowerCase().startsWith(searchValue.toLowerCase())
        ) {
          matchFound = true;
          loader(false);
          resultcount++;

          let list1 = document.createElement("li");
          list1.classList.add("list_item");
          list1.style.cursor = "pointer";
          list1.style.listStyle = "none";
          list1.style.fontWeight = "500";
          list1.addEventListener("click", () => {
            autocomplete(location[i][j]);
            callback(location[i][j]);
          });

          let word = `<span style="color:blue;">${location[i][j].substr(
            0,
            searchValue.length
          )}</span>`;
          word += location[i][j].substr(searchValue.length);
          list1.innerHTML = word;
          mainlist.appendChild(list1);

          if (resultcount > 10) {
            break;
          }
        }
      }
      if (resultcount >= 5) {
        break;
      }
    }
    if (!matchFound) {
      loader(false);
      mainlist.classList.add("hidden");
      newupper.classList.remove("hidden");
      uppertext.innerHTML = "No result found";
    }
  }
  close.addEventListener("click", () => {
    searchchange.value = "";
    end();
    mic.classList.remove("hidden");
    mic.classList.add("flex");
    close.classList.remove("flex");
    close.classList.add("hidden");

    mainlist.classList.add("hidden");
    newupper.classList.remove("hidden");
    uppertext.innerHTML = "Enter a location name";
  });
  function autocomplete(value) {
    searchchange.value = "";
    mainlist.innerHTML = "";
    mainlist.classList.add("hidden");
    let arr = value.split(" ");
    places.innerHTML = `${arr[0]} ...`;
    toggleVisibility();
    if (searchbox.classList.contains("hidden")) {
      searchbox.classList.remove("hidden");
      maincontent.classList.add("hidden");
    } else {
      searchbox.classList.add("hidden");
      maincontent.classList.remove("hidden");
    }
    if (searchchange.value !== "") {
      mic.classList.remove("flex");
      mic.classList.add("hidden");
      close.classList.remove("hidden");
      close.classList.add("flex");
      uppertext.innerHTML = "Enter a location name";
    } else {
      mic.classList.remove("hidden");
      mic.classList.add("flex");
      close.classList.remove("flex");
      close.classList.add("hidden");
    }
  }
}
let isAbove640 = window.innerWidth >= 640;
function handleResize() {
  const currentWidth = window.innerWidth;
  if (currentWidth >= 640 && !isAbove640) {
    toggleVisibility();
    searchbox.classList.add("hidden");
    maincontent.classList.remove("hidden");
    isAbove640 = true;
  } else if (currentWidth < 640 && isAbove640) {
    toggleVisibility();
    searchbox.classList.add("hidden");
    maincontent.classList.remove("hidden");
    isAbove640 = false;
  }
}
window.addEventListener("resize", handleResize);
toggleVisibility("hidden");
function toggleVisibility(value) {
  if (window.innerWidth >= 640) {
    grayh.classList.add(value);
    uppergray.classList.add(value);
    if (grayh.classList.contains("hidden")) {
      grayh.classList.remove("hidden");
      uppergray.classList.remove("hidden");
    } else {
      grayh.classList.add("hidden");
      uppergray.classList.add("hidden");
    }
  } else {
    grayh.classList.add("hidden");
    uppergray.classList.add("hidden");
  }
}
searchbtn.addEventListener("click", () => {
  toggleVisibility();
  if (searchbox.classList.contains("hidden")) {
    searchbox.classList.remove("hidden");
    maincontent.classList.add("hidden");
  } else {
    searchbox.classList.add("hidden");
    maincontent.classList.remove("hidden");
  }
  mainlist.classList.add("hidden");
  newupper.classList.remove("hidden");
});
backbtn.addEventListener("click", () => {
  toggleVisibility();
  if (searchbox.classList.contains("hidden")) {
    searchbox.classList.remove("hidden");
    maincontent.classList.add("hidden");
  } else {
    searchbox.classList.add("hidden");
    maincontent.classList.remove("hidden");
  }
  searchchange.value = "";
  if (searchchange.value !== "") {
    mic.classList.remove("flex");
    mic.classList.add("hidden");
    close.classList.remove("hidden");
    close.classList.add("flex");
    uppertext.innerHTML = "Enter a location name";
  } else {
    mic.classList.remove("hidden");
    mic.classList.add("flex");
    close.classList.remove("flex");
    close.classList.add("hidden");
  }
});
searchchange.addEventListener("input", () => {
  if (searchchange.value !== "") {
    mic.classList.remove("flex");
    mic.classList.add("hidden");
    close.classList.remove("hidden");
    close.classList.add("flex");
    uppertext.innerHTML = "Enter a location name";
  } else {
    mic.classList.remove("hidden");
    mic.classList.add("flex");
    close.classList.remove("flex");
    close.classList.add("hidden");
  }
});

let d = new Date();
date.innerHTML = d.getDate();
let arr_d = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
da = d.getDay();
day.innerHTML = arr_d[da];

function fetchsecond(value) {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${value},India?key=VK4VAB342MQ98R9FPQASYV3WR`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      nextdays.addEventListener("click", () => {
        if (nextdays.classList.contains("active")) {
          updateactive(0);
          days.innerHTML = "";
        }
      });
      checkbox.addEventListener("click", () => {
        updateactive(currentIndex);
        checking();
        updateweek();
        todayfunc();
        if (checkbox.checked == true) {
          for (let i = 0; i < change.length; i++) {
            change[i].innerHTML = "C";
          }
        } else {
          for (let i = 0; i < change.length; i++) {
            change[i].innerHTML = "F";
          }
        }
      });
      for (let i = 0; i < 2; i++) {
        humidity[i].innerHTML = data.days[0].humidity;
        wind[i].innerHTML = data.days[0].windspeed;
        precipitation[i].innerHTML = data.days[0].precip;
        uv_index[i].innerHTML = data.days[0].uvindex;
        feel[i].innerHTML = conversion(data.days[0].feelslike);
        dew[i].innerHTML = conversion(data.days[0].dew);
      }

      function checking() {
        if (checkbox.checked == true) {
          feels_like[0].innerHTML = conversion(data.days[0].feelslike);
        } else {
          feels_like[0].innerHTML = data.days[0].feelslike;
        }
      }
      visibility.innerHTML = data.days[0].visibility;
      sunrise.innerHTML = data.days[0].sunrise;
      sunset.innerHTML = data.days[0].sunset;
      moonphase.innerHTML = data.days[0].moonphase;

      let sunrise1 = data.days[0].sunrise;
      let sunset1 = data.days[0].sunset;
      let z = data.currentConditions.datetime;
      let hourslength = data.days[0].hours.length;
      let arr_time = [];
      let arr_temp = [];
      let arr_cloud = [];
      let convert_temp = [];
      updateactive();

      nextdays.addEventListener("click", () => {
        if (today.classList.contains("active")) {
          updateactive(0);
          days.innerHTML = weektime[0].innerHTML;
        }
      });
      let currentIndex;
      div1.addEventListener("click", () => {
        updateactive(0);
        currentIndex = 0;
        days.innerHTML = weektime[0].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });
      div2.addEventListener("click", () => {
        updateactive(1);
        currentIndex = 1;
        days.innerHTML = weektime[1].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });
      div3.addEventListener("click", () => {
        updateactive(2);
        currentIndex = 2;
        days.innerHTML = weektime[2].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });
      div4.addEventListener("click", () => {
        updateactive(3);
        currentIndex = 3;
        days.innerHTML = weektime[3].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });
      div5.addEventListener("click", () => {
        updateactive(4);
        currentIndex = 4;
        days.innerHTML = weektime[4].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });
      div6.addEventListener("click", () => {
        updateactive(5);
        currentIndex = 5;
        days.innerHTML = weektime[5].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });
      div7.addEventListener("click", () => {
        updateactive(6);
        currentIndex = 6;
        days.innerHTML = weektime[6].innerHTML;
        today.classList.add("flex");
        today.classList.remove("hidden");
        week.classList.add("hidden");
        week.classList.remove("flex");
      });

      let weekdivs = [
        weekdiv1,
        weekdiv2,
        weekdiv3,
        weekdiv4,
        weekdiv5,
        weekdiv6,
        weekdiv7,
      ];

      function weekupdateactive(index) {
        weekdivs.forEach((div) => {
          div.classList.remove("active");
          div.style.backgroundColor = "";
        });

        weekdivs[index].classList.add("active");
        weekdivs[index].style.backgroundColor = "#60a5fa";
      }

      weekupdateactive(0);
      weekdivs.forEach((div, index) => {
        div.addEventListener("click", () => {
          weekupdateactive(index);
          updateactive(index);
          currentIndex = index;
          weekdays.innerHTML = week1time[index].innerHTML;
        });
      });

      function conversion(data) {
        let celsius = ((data - 32) * 5) / 9;
        return Math.round(celsius);
      }
      todayfunc();
      function todayfunc() {
        if (checkbox.checked == true) {
          todaytemp.innerHTML = conversion(data.currentConditions.temp);
        } else {
          todaytemp.innerHTML = data.currentConditions.temp;
        }
      }
      todaycondition.innerHTML = data.currentConditions.conditions;
      function updateactive(val = 0) {
        new_time = [];
        arr_time = [];
        arr_temp = [];
        arr_cloud = [];
        convert_temp = [];
        prob = [];
        rounded_arr = [];
        let date = new Date();
        let currenttime = date.getHours();
        const problength = data.days[val].hours.length;
        const hourslength = data.days[val].hours.length;
        for (let i = 0; i < hourslength; i++) {
          let time = data.days[val].hours[i].datetime;
          let fullDateTime = `2024-07-27T${time}`;
          let date = new Date(fullDateTime);
          let newtime = date.toLocaleTimeString(navigator.language, {
            hour: "2-digit",
            minute: "2-digit",
          });
          arr_time.push(newtime);
        }
        arr_time.push("00:00");
        let count_time = 0;
        let actual_time = currenttime;
        for (let j = 0; j < 2 && count_time < 24; j++) {
          for (let i = actual_time; i < 24; i++) {
            if (count_time >= 24) {
              break;
            }
            actual_time++;
            count_time++;
            new_time.push(arr_time[i]);
          }
          actual_time = 0;
        }
        let count_icon = 0;
        let count_prob = 0;
        let count_temp = 0;
        let temp_time = currenttime;
        let icon_time = currenttime;
        let prob_time = currenttime;
        if (val === 0) {
          for (let val = 0; val < 2 && count_temp < 24; val++) {
            for (let i = temp_time; i < 24; i++) {
              if (count_temp >= 24) {
                break;
              }
              temp_time++;
              count_temp++;
              let temp = data.days[val].hours[i].temp;
              arr_temp.push(temp);
            }
            temp_time = 0;
          }
          for (let val = 0; val < 2 && count_icon < 24; val++) {
            for (let i = icon_time; i < 24; i++) {
              if (count_icon >= 24) {
                break;
              }
              icon_time++;
              count_icon++;
              let icon = data.days[val].hours[i].icon;
              arr_cloud.push(icon);
            }
            icon_time = 0;
          }
          for (let val = 0; val < 2 && count_prob < 24; val++) {
            for (let i = prob_time; i < 24; i++) {
              if (count_prob >= 24) {
                break;
              }
              prob_time++;
              count_prob++;
              let p = data.days[val].hours[i].precipprob;
              prob.push(p);
            }
            prob_time = 0;
          }
        } else {
          for (let i = 0; i < hourslength; i++) {
            let temp = data.days[val].hours[i].temp;
            arr_temp.push(temp);
          }
          for (let i = 0; i < hourslength; i++) {
            let icon = data.days[val].hours[i].icon;
            arr_cloud.push(icon);
          }
          for (let i = 0; i < problength; i++) {
            prob.push(data.days[val].hours[i].precipprob);
          }
        }

        for (let i = 0; i < prob.length; i++) {
          rounded_arr.push(Math.round(prob[i] / 5) * 5);
        }
        for (let i = 0; i < perc.length; i++) {
          if (rounded_arr[i] === 0) {
            perc[i].innerHTML = "&nbsp";
          } else {
            perc[i].innerHTML = `${rounded_arr[i]}%`;
          }
        }
        for (let i = 0; i < perc.length; i++) {
          if (rounded_arr[i] === 0) {
            perc1[i].innerHTML = "&nbsp";
          } else {
            perc1[i].innerHTML = `${rounded_arr[i]}%`;
          }
        }
        for (let i = 0; i < arr_temp.length; i++) {
          convert_temp.push(conversion(arr_temp[i]));
        }
        if (val === 0) {
          for (let i = 0; i < 24; i++) {
            updatetime[i].innerHTML = new_time[i];
          }
          for (let i = 0; i < 24; i++) {
            update1time[i].innerHTML = new_time[i];
          }
        } else {
          for (let i = 0; i < 24; i++) {
            updatetime[i].innerHTML = arr_time[i];
          }
          for (let i = 0; i < 24; i++) {
            update1time[i].innerHTML = arr_time[i];
          }
        }
        for (let i = 0; i < 24; i++) {}

        for (let i = 0; i < 24; i++) {
          if (checkbox.checked == true) {
            updatetemp[i].innerHTML = convert_temp[i];
          } else {
            updatetemp[i].innerHTML = arr_temp[i];
          }
        }
        for (let i = 0; i < 24; i++) {
          if (checkbox.checked == true) {
            update1temp[i].innerHTML = convert_temp[i];
          } else {
            update1temp[i].innerHTML = arr_temp[i];
          }
        }
        for (let i = 0; i < 24; i++) {
          updatetext[i].innerHTML = arr_cloud[i];
        }
        for (let i = 0; i < 24; i++) {
          update1text[i].innerHTML = arr_cloud[i];
        }
        for (let i = 0; i < 24; i++) {
          let x = arr_cloud[i];
          if (x === "partly-cloudy-night") {
            updateimg[i].src =
              "images/2682811_cloud_cloudy_fog_mist_moon_icon.png";
          } else if (x === "partly-cloudy-day") {
            updateimg[i].src =
              "images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
          } else if (x === "rain" && (z >= sunset1 || z <= sunrise1)) {
            updateimg[i].src =
              "images/2682843_cloud_forecast_moon_night_rain_icon.png";
          } else if (x === "rain" && z > sunrise1 && z < sunset1) {
            updateimg[i].src =
              "images/2682844_cloud_day_precipitation_rain_snow_icon.png";
          } else if (x === "cloudy") {
            updateimg[i].src =
              "images/2682841_cloud_cloudy_forecast_storm_weather_icon.png";
          } else if (x === "clear-day") {
            updateimg[i].src =
              "images/2682848_day_forecast_sun_sunny_weather_icon.png";
          } else if (x === "clear-night") {
            updateimg[i].src =
              "images/2682847_eclipse_forecast_moon_night_space_icon.png";
          }
        }
        for (let i = 0; i < 24; i++) {
          let x = arr_cloud[i];
          if (x === "partly-cloudy-night") {
            update1img[i].src =
              "images/2682811_cloud_cloudy_fog_mist_moon_icon.png";
          } else if (x === "partly-cloudy-day") {
            update1img[i].src =
              "images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
          } else if (x === "rain" && (z >= sunset1 || z <= sunrise1)) {
            update1img[i].src =
              "images/2682843_cloud_forecast_moon_night_rain_icon.png";
          } else if (x === "rain" && z > sunrise1 && z < sunset1) {
            update1img[i].src =
              "images/2682844_cloud_day_precipitation_rain_snow_icon.png";
          } else if (x === "cloudy") {
            update1img[i].src =
              "images/2682841_cloud_cloudy_forecast_storm_weather_icon.png";
          } else if (x === "clear-day") {
            update1img[i].src =
              "images/2682848_day_forecast_sun_sunny_weather_icon.png";
          } else if (x === "clear-night") {
            update1img[i].src =
              "images/2682847_eclipse_forecast_moon_night_space_icon.png";
          }
        }
      }
      let arr1_temp = [];
      let arr1_time = [];
      let arr1_cloud = [];
      let arr1_day = [];
      let convert1_temp = [];
      let week_prob = [];
      let week_rounded_arr = [];
      updateweek();
      for (let i = 0; i < 7; i++) {
        week_prob.push(data.days[i].precipprob);
      }
      for (let i = 0; i < week_prob.length; i++) {
        week_rounded_arr.push(Math.round(week_prob[i] / 5) * 5);
      }
      for (let i = 0; i < weekperc.length; i++) {
        if (week_rounded_arr[i] === 0) {
          weekperc[i].innerHTML = "&nbsp";
        } else {
          weekperc[i].innerHTML = `${week_rounded_arr[i]}%`;
        }
      }
      for (let i = 0; i < weekperc.length; i++) {
        if (week_rounded_arr[i] === 0) {
          weekperc1[i].innerHTML = "&nbsp";
        } else {
          weekperc1[i].innerHTML = `${week_rounded_arr[i]}%`;
        }
      }
      for (let i = 0; i < 8; i++) {
        let temp = data.days[i].temp;
        arr1_temp.push(temp);
      }

      for (let i = 0; i < arr1_temp.length; i++) {
        convert1_temp.push(conversion(arr1_temp[i]));
      }
      updateweek();
      function updateweek() {
        for (let i = 0; i < 7; i++) {
          if (checkbox.checked == true) {
            weektemp[i].innerHTML = convert1_temp[i];
            week1temp[i].innerHTML = convert1_temp[i];
          } else {
            weektemp[i].innerHTML = arr1_temp[i];
            week1temp[i].innerHTML = arr1_temp[i];
          }
        }
      }
      for (let i = 0; i < 8; i++) {
        let icon = data.days[i].icon;
        arr1_cloud.push(icon);
      }

      for (let i = 0; i < 7; i++) {
        let x = arr1_cloud[i];
        if (x === "partly-cloudy-day") {
          weekimg[i].src =
            "images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
        } else if (x === "rain") {
          weekimg[i].src =
            "images/2682844_cloud_day_precipitation_rain_snow_icon.png";
        } else if (x === "cloudy") {
          weekimg[i].src =
            "images/2682841_cloud_cloudy_forecast_storm_weather_icon.png";
        } else if (x === "clear-day") {
          weekimg[i].src =
            "images/2682848_day_forecast_sun_sunny_weather_icon.png";
        }
      }
      for (let i = 0; i < 7; i++) {
        weektext[i].innerHTML = arr1_cloud[i];
      }
      for (let i = 0; i < 8; i++) {
        let x = data.days[i].datetime;
        arr1_time.push(x);
      }
      let arr_day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      for (let i = 0; i < 8; i++) {
        let d = new Date(arr1_time[i]);
        let day = d.getDay();
        arr1_day.push(arr_day[day]);
      }
      for (let i = 1; i < 7; i++) {
        weektime[i].innerHTML = arr1_day[i];
      }
      weektime[0].innerHTML = "Today";
      for (let i = 0; i < 7; i++) {
        let x = arr1_cloud[i];
        if (x === "clear-day") {
          week1img[i].src =
            "images/2682848_day_forecast_sun_sunny_weather_icon.png";
        } else if (x === "cloudy") {
          week1img[i].src =
            "images/2682841_cloud_cloudy_forecast_storm_weather_icon.png";
        } else if (x === "rain") {
          week1img[i].src =
            "images/2682844_cloud_day_precipitation_rain_snow_icon.png";
        } else if (x === "partly-cloudy-day") {
          week1img[i].src =
            "images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
        }
      }
      for (let i = 0; i < 7; i++) {
        week1text[i].innerHTML = arr1_cloud[i];
      }

      for (let i = 1; i < 7; i++) {
        week1time[i].innerHTML = arr1_day[i];
      }
      console.log(data)
      week1time[0].innerHTML = "Today";
      let y = data.currentConditions.icon;
      if (y === "partly-cloudy-night") {
        dayupdate.src = "images/2682811_cloud_cloudy_fog_mist_moon_icon.png";
      } else if (y === "partly-cloudy-day") {
        dayupdate.src = "images/2682849_cloud_cloudy_day_forecast_sun_icon.png";
      } else if (y === "rain" && (z >= sunset1 || z <= sunrise1)) {
        dayupdate.src =
          "images/2682843_cloud_forecast_moon_night_rain_icon.png";
      } else if (y === "cloudy" || y === "fog") {
        dayupdate.src =
          "images/2682841_cloud_cloudy_forecast_storm_weather_icon.png";
      } else if (y === "clear-day") {
        dayupdate.src =
          "images/2682848_day_forecast_sun_sunny_weather_icon.png";
      } else if (y === "clear-night") {
        dayupdate.src =
          "images/2682847_eclipse_forecast_moon_night_space_icon.png";
      } else if (y === "rain" && z > sunrise1 && z < sunset1) {
        dayupdate.src =
          "images/2682844_cloud_day_precipitation_rain_snow_icon.png";
      }
    });
}
fetchfirst(fetchsecond);
