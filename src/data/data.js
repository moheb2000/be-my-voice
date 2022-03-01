/* eslint-disable */

import languages from "@/data/languages";

const colors = {
  purple: "hsl(263, 60%, 48%)",
  darkBlue: "hsl(218, 23%, 21%)",
  red: "hsl(5, 81%, 38%)",
  cyan: "hsl(181, 49%, 36%)",
};

const data = {
  homeBox: [
    {
      id: "homeBox1",
      img: "form.png",
      alt: languages["fa"].homeBoxForm,
      text: languages["fa"].homeBoxForm,
      color: colors.purple,
      link: "/form",
    },
    {
      id: "homeBox2",
      img: "security.png",
      alt: languages["fa"].homeBoxSecurity,
      text: languages["fa"].homeBoxSecurity,
      color: colors.darkBlue,
      link: "/education/0",
    },
    {
      id: "homeBox3",
      img: "ambulance.png",
      alt: languages["fa"].homeBoxAmbulance,
      text: languages["fa"].homeBoxAmbulance,
      color: colors.red,
      link: "/emergency",
    },
    {
      id: "homeBox4",
      img: "network.png",
      alt: languages["fa"].homeBoxNetwork,
      text: languages["fa"].homeBoxNetwork,
      color: colors.cyan,
      link: "/smn",
    },
  ],
  emergencyBoxes: [
    {
      id: "1",
      text: languages["fa"].emergencyText1,
    },
    {
      id: "2",
      text: languages["fa"].emergencyText2,
    },
    {
      id: "3",
      text: languages["fa"].emergencyText3,
    },
    {
      id: "4",
      text: languages["fa"].emergencyText4,
    },
  ],
  educationPages: [
    {
      title: languages["fa"].educationTitle,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text1,
          link: "1",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text2,
          link: "6",
        },
        {
          id: "3",
          isText: false,
          text: languages["fa"].text3,
          link: "9",
        },
        {
          id: "4",
          isText: false,
          text: languages["fa"].text4,
          link: "11",
        },
        {
          id: "5",
          isText: false,
          text: languages["fa"].text5,
          link: "14",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle2,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text6,
          link: "1",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text7,
          link: "1",
        },
        {
          id: "3",
          isText: false,
          text: languages["fa"].text8,
          link: "1",
        },
        {
          id: "4",
          isText: false,
          text: languages["fa"].text9,
          link: "2",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle3,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text10,
          link: "2",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text11,
          link: "2",
        },
        {
          id: "3",
          isText: false,
          text: languages["fa"].text12,
          link: "2",
        },
        {
          id: "4",
          isText: false,
          text: languages["fa"].text13,
          link: "3",
        },
        {
          id: "5",
          isText: false,
          text: languages["fa"].text14,
          link: "4",
        },
        {
          id: "6",
          isText: false,
          text: languages["fa"].text15,
          link: "5",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle4,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text16,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle5,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text17,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle6,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text18,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle7,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text19,
          link: "7",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text20,
          link: "8",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle8,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text21,
        },
        {
          id: "2",
          isText: true,
          text: languages["fa"].text22,
        },
        {
          id: "3",
          isText: true,
          text: languages["fa"].text23,
        },
        {
          id: "4",
          isText: true,
          text: languages["fa"].text24,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle9,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text25,
        },
        {
          id: "2",
          isText: true,
          text: languages["fa"].text26,
        },
        {
          id: "3",
          isText: true,
          text: languages["fa"].text27,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle10,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text28,
          link: "9",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text29,
          link: "10",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle12,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text35,
          link: "11",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text36,
          link: "13",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle13,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text37,
        },
        {
          id: "2",
          isText: true,
          text: languages["fa"].text38,
        },
        {
          id: "3",
          isText: true,
          text: languages["fa"].text39,
        },
        {
          id: "4",
          isText: true,
          text: languages["fa"].text40,
        },
        {
          id: "5",
          isText: true,
          text: languages["fa"].text41,
        },
        {
          id: "6",
          isText: false,
          text: languages["fa"].text42,
          link: "12",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle14,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text43,
        },
        {
          id: "2",
          isText: true,
          text: languages["fa"].text44,
        },
        {
          id: "3",
          isText: true,
          text: languages["fa"].text45,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle15,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text46,
        },
        {
          id: "2",
          isText: true,
          text: languages["fa"].text47,
        },
        {
          id: "3",
          isText: true,
          text: languages["fa"].text48,
        },
        {
          id: "4",
          isText: true,
          text: languages["fa"].text49,
        },
        {
          id: "5",
          isText: true,
          text: languages["fa"].text50,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle16,
      components: [
        {
          id: "1",
          isText: false,
          text: languages["fa"].text51,
          link: "15",
        },
        {
          id: "2",
          isText: false,
          text: languages["fa"].text52,
          link: "16",
        },
      ],
    },
    {
      title: languages["fa"].educationTitle17,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text53,
        },
        {
          id: "2",
          isText: true,
          text: languages["fa"].text54,
        },
      ],
    },
    {
      title: languages["fa"].educationTitle18,
      components: [
        {
          id: "1",
          isText: true,
          text: languages["fa"].text55,
        },
      ],
    },
  ],
  formPage: {
    title: languages["fa"].formViewTitle,
    questions: [
      {
        id: "1",
        title: languages["fa"].question1,
      },
      {
        id: "2",
        title: languages["fa"].question2,
      },
      {
        id: "3",
        title: languages["fa"].question3,
      },
      {
        id: "4",
        title: languages["fa"].question4,
      },
      {
        id: "5",
        title: languages["fa"].question5,
      },
      {
        id: "6",
        title: languages["fa"].question6,
      },
      {
        id: "7",
        title: languages["fa"].question7,
      },
      {
        id: "8",
        title: languages["fa"].question8,
      },
      {
        id: "9",
        title: languages["fa"].question9,
      },
      {
        id: "10",
        title: languages["fa"].question10,
      },
      {
        id: "11",
        title: languages["fa"].question11,
      },
      {
        id: "12",
        title: languages["fa"].question12,
      },
      {
        id: "13",
        title: languages["fa"].question13,
      },
      {
        id: "14",
        title: languages["fa"].question14,
      },
      {
        id: "15",
        title: languages["fa"].question15,
      },
      {
        id: "16",
        title: languages["fa"].question16,
      },
      {
        id: "17",
        title: languages["fa"].question17,
      },
      {
        id: "18",
        title: languages["fa"].question18,
      },
      {
        id: "19",
        title: languages["fa"].question19,
      },
      {
        id: "20",
        title: languages["fa"].question20,
      },
    ],
  }
};

export { data as default };