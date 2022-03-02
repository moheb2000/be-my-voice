/* eslint-disable */

import languages from "@/data/languages";

const colors = {
  purple: "hsl(263, 60%, 48%)",
  darkBlue: "hsl(218, 23%, 21%)",
  red: "hsl(5, 81%, 38%)",
  cyan: "hsl(181, 49%, 36%)",
};

let l = localStorage.lang;

const data = {
  homeBox: [
    {
      id: "homeBox1",
      img: "form.png",
      alt: languages[l].homeBoxForm,
      text: languages[l].homeBoxForm,
      color: colors.purple,
      link: "/form",
    },
    {
      id: "homeBox2",
      img: "security.png",
      alt: languages[l].homeBoxSecurity,
      text: languages[l].homeBoxSecurity,
      color: colors.darkBlue,
      link: "/education/0",
    },
    {
      id: "homeBox3",
      img: "ambulance.png",
      alt: languages[l].homeBoxAmbulance,
      text: languages[l].homeBoxAmbulance,
      color: colors.red,
      link: "/emergency",
    },
    {
      id: "homeBox4",
      img: "network.png",
      alt: languages[l].homeBoxNetwork,
      text: languages[l].homeBoxNetwork,
      color: colors.cyan,
      link: "/smn",
    },
  ],
  emergencyBoxes: [
    {
      id: "1",
      text: languages[l].emergencyText1,
    },
    {
      id: "2",
      text: languages[l].emergencyText2,
    },
    {
      id: "3",
      text: languages[l].emergencyText3,
    },
    {
      id: "4",
      text: languages[l].emergencyText4,
    },
  ],
  educationPages: [
    {
      title: languages[l].educationTitle,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text1,
          link: "1",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text2,
          link: "6",
        },
        {
          id: "3",
          isText: false,
          text: languages[l].text3,
          link: "9",
        },
        {
          id: "4",
          isText: false,
          text: languages[l].text4,
          link: "11",
        },
        {
          id: "5",
          isText: false,
          text: languages[l].text5,
          link: "14",
        },
      ],
    },
    {
      title: languages[l].educationTitle2,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text6,
          link: "1",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text7,
          link: "1",
        },
        {
          id: "3",
          isText: false,
          text: languages[l].text8,
          link: "1",
        },
        {
          id: "4",
          isText: false,
          text: languages[l].text9,
          link: "2",
        },
      ],
    },
    {
      title: languages[l].educationTitle3,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text10,
          link: "2",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text11,
          link: "2",
        },
        {
          id: "3",
          isText: false,
          text: languages[l].text12,
          link: "2",
        },
        {
          id: "4",
          isText: false,
          text: languages[l].text13,
          link: "3",
        },
        {
          id: "5",
          isText: false,
          text: languages[l].text14,
          link: "4",
        },
        {
          id: "6",
          isText: false,
          text: languages[l].text15,
          link: "5",
        },
      ],
    },
    {
      title: languages[l].educationTitle4,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text16,
        },
      ],
    },
    {
      title: languages[l].educationTitle5,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text17,
        },
      ],
    },
    {
      title: languages[l].educationTitle6,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text18,
        },
      ],
    },
    {
      title: languages[l].educationTitle7,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text19,
          link: "7",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text20,
          link: "8",
        },
      ],
    },
    {
      title: languages[l].educationTitle8,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text21,
        },
        {
          id: "2",
          isText: true,
          text: languages[l].text22,
        },
        {
          id: "3",
          isText: true,
          text: languages[l].text23,
        },
        {
          id: "4",
          isText: true,
          text: languages[l].text24,
        },
      ],
    },
    {
      title: languages[l].educationTitle9,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text25,
        },
        {
          id: "2",
          isText: true,
          text: languages[l].text26,
        },
        {
          id: "3",
          isText: true,
          text: languages[l].text27,
        },
      ],
    },
    {
      title: languages[l].educationTitle10,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text28,
          link: "9",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text29,
          link: "10",
        },
      ],
    },
    {
      title: languages[l].educationTitle12,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text35,
          link: "11",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text36,
          link: "13",
        },
      ],
    },
    {
      title: languages[l].educationTitle13,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text37,
        },
        {
          id: "2",
          isText: true,
          text: languages[l].text38,
        },
        {
          id: "3",
          isText: true,
          text: languages[l].text39,
        },
        {
          id: "4",
          isText: true,
          text: languages[l].text40,
        },
        {
          id: "5",
          isText: true,
          text: languages[l].text41,
        },
        {
          id: "6",
          isText: false,
          text: languages[l].text42,
          link: "12",
        },
      ],
    },
    {
      title: languages[l].educationTitle14,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text43,
        },
        {
          id: "2",
          isText: true,
          text: languages[l].text44,
        },
        {
          id: "3",
          isText: true,
          text: languages[l].text45,
        },
      ],
    },
    {
      title: languages[l].educationTitle15,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text46,
        },
        {
          id: "2",
          isText: true,
          text: languages[l].text47,
        },
        {
          id: "3",
          isText: true,
          text: languages[l].text48,
        },
        {
          id: "4",
          isText: true,
          text: languages[l].text49,
        },
        {
          id: "5",
          isText: true,
          text: languages[l].text50,
        },
      ],
    },
    {
      title: languages[l].educationTitle16,
      components: [
        {
          id: "1",
          isText: false,
          text: languages[l].text51,
          link: "15",
        },
        {
          id: "2",
          isText: false,
          text: languages[l].text52,
          link: "16",
        },
      ],
    },
    {
      title: languages[l].educationTitle17,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text53,
        },
        {
          id: "2",
          isText: true,
          text: languages[l].text54,
        },
      ],
    },
    {
      title: languages[l].educationTitle18,
      components: [
        {
          id: "1",
          isText: true,
          text: languages[l].text55,
        },
      ],
    },
  ],
  formPage: {
    title: languages[l].formViewTitle,
    questions: [
      {
        id: "1",
        title: languages[l].question1,
      },
      {
        id: "2",
        title: languages[l].question2,
      },
      {
        id: "3",
        title: languages[l].question3,
      },
      {
        id: "4",
        title: languages[l].question4,
      },
      {
        id: "5",
        title: languages[l].question5,
      },
      {
        id: "6",
        title: languages[l].question6,
      },
      {
        id: "7",
        title: languages[l].question7,
      },
      {
        id: "8",
        title: languages[l].question8,
      },
      {
        id: "9",
        title: languages[l].question9,
      },
      {
        id: "10",
        title: languages[l].question10,
      },
      {
        id: "11",
        title: languages[l].question11,
      },
      {
        id: "12",
        title: languages[l].question12,
      },
      {
        id: "13",
        title: languages[l].question13,
      },
      {
        id: "14",
        title: languages[l].question14,
      },
      {
        id: "15",
        title: languages[l].question15,
      },
      {
        id: "16",
        title: languages[l].question16,
      },
      {
        id: "17",
        title: languages[l].question17,
      },
      {
        id: "18",
        title: languages[l].question18,
      },
      {
        id: "19",
        title: languages[l].question19,
      },
      {
        id: "20",
        title: languages[l].question20,
      },
    ],
  }
};

export { data as default };