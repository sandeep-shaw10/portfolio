import Image1 from '../../Method/ProjectImage/Sorting1.webp'
import Image2 from '../../Method/ProjectImage/GraphJS.webp'
import Image3 from '../../Method/ProjectImage/covid.webp'
import Image4 from '../../Method/ProjectImage/qr-scan.webp'
import Image5 from '../../Method/ProjectImage/P2_Python_TTS.webp'
import Image6 from '../../Method/ProjectImage/py-account.webp'
import Image7 from '../../Method/ProjectImage/direct-msg.webp'
import Image8 from '../../Method/ProjectImage/Resume.webp'
import Image9 from '../../Method/ProjectImage/DjangoApp.webp'
import Image10 from '../../Method/ProjectImage/Ecommerce.webp'
import Image11 from '../../Method/ProjectImage/gcect.webp'
import Image12 from '../../Method/ProjectImage/web-react.webp'

const categoryData = [
    'Web',          //0
    'React',        //1
    'Django',       //2
    'Python',       //3
    'Wordpress',    //4
    'VBA',          //5
    'Excel',        //6
]

const projectData = [
    {
        name: "Sorting Visualizer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image1,
        projectLink: "https://sandeep-shaw10.github.io/Algorithm_App/",
        category: [categoryData[0]]
    },
    {
        name: "Graph Visualizer",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image2,
        projectLink: "https://sandeep-shaw10.github.io/GraphJS/",
        category: [categoryData[0]]
    },
    {
        name: "Covid-19 Data",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image3,
        projectLink: "https://sandeep-shaw10.github.io/covidIndia/",
        category: [categoryData[0]]
    },
    {
        name: "Py-QRCode",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image4,
        projectLink: "https://github.com/sandeep-shaw10/qr-code-generator",
        category: [categoryData[3]]
    },
    {
        name: "Py-TTS",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image5,
        projectLink: "https://www.youtube.com/watch?v=Wx7speBL58k",
        category: [categoryData[3]]
    },
    {
        name: "Py-Account",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image6,
        projectLink: "https://www.youtube.com/watch?v=FggYqapL9Kk",
        category: [categoryData[3]]
    },
    {
        name: "Web Layout",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image12,
        projectLink: "https://sandeep-shaw10.github.io/webTemplate/",
        category: [categoryData[1],categoryData[0]]
    },
    {
        name: "Resume Maker",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image8,
        projectLink: "",
        category: [categoryData[0], categoryData[1]]
    },
    {
        name: "Porfolio & Blog",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image9,
        projectLink: "https://sandeepshaw.herokuapp.com/",
        category: [categoryData[0], categoryData[2], categoryData[3]]
    },
    {
        name: "Multi-Vendor Ecommerce",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image10,
        projectLink: "https://bishnupursilksaree.co.in/",
        category: [categoryData[0], categoryData[4]]
    },
    {
        name: "Exam Cell Automation",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image11,
        projectLink: "https://github.com/sandeep-shaw10/exam-cell-automation",
        category: [categoryData[5], categoryData[6]]
    },
    {
        name: "Message Sender",
        about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis a temporibus eaque explicabo neque accusantium eum sed quaerat officia",
        imgLink: Image7,
        projectLink: "https://www.youtube.com/watch?v=QUcZ84F2KO8",
        category: [categoryData[3]]
    },

]


export {projectData, categoryData}