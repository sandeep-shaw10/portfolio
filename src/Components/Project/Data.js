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
        about: "Bubble Sort, Selection Sort, Insertion Sort, and Quick Sort Visualization along with code snippets, time and space complexity.",
        imgLink: Image1,
        projectLink: "https://sandeep-shaw10.github.io/Algorithm_App/",
        category: [categoryData[0]]
    },
    {
        name: "Graph Visualizer",
        about: "Visualization of some pathfinding Algorithms like Breadth-First Search(BFS), Depth-First Search(DFS), Dijkstra Algorithm, and A* Star.",
        imgLink: Image2,
        projectLink: "https://sandeep-shaw10.github.io/GraphJS/",
        category: [categoryData[0]]
    },
    {
        name: "Covid-19 Data",
        about: "Working with real-time API to fetch and render the Covid-19 cases not only in India but around the globe and representation using ChartJS.",
        imgLink: Image3,
        projectLink: "https://sandeep-shaw10.github.io/covidIndia/",
        category: [categoryData[0]]
    },
    {
        name: "Py-QRCode",
        about: "Using Python Eel's to utilize web languages like HTML, CSS, and JS in Desktop Application which generates a QR Code based on any input.",
        imgLink: Image4,
        projectLink: "https://github.com/sandeep-shaw10/qr-code-generator",
        category: [categoryData[3], categoryData[0]]
    },
    {
        name: "Py-TTS",
        about: "Text to Speech Application that works offline thanks to the Pyttsx3 module. Provides options like change in voice pace, speed, and type.",
        imgLink: Image5,
        projectLink: "https://www.youtube.com/watch?v=Wx7speBL58k",
        category: [categoryData[3]]
    },
    {
        name: "Py-Account",
        about: "Simple Single-User Application to calculate and analyze the monthly income and expenses side by side within SQLite3 databases.",
        imgLink: Image6,
        projectLink: "https://www.youtube.com/watch?v=FggYqapL9Kk",
        category: [categoryData[3]]
    },
    {
        name: "Web Layout",
        about: "A basic Single Page Web Application made with ReactJS and hosted via gh-pages on Github. It also provide no Reload/Refresh error.",
        imgLink: Image12,
        projectLink: "https://sandeep-shaw10.github.io/webTemplate/",
        category: [categoryData[1],categoryData[0]]
    },
    {
        name: "Resume Maker",
        about: "A Dynamic Resume Generating website made with ReactJS. Feature include Local Storage System, that saves your data even on page refresh.",
        imgLink: Image8,
        projectLink: "",
        category: [categoryData[0], categoryData[1]]
    },
    {
        name: "Porfolio & Blog",
        about: "My first Portfolio and Blog website made using Django, a python framework as a backend hosted on Heroku. ",
        imgLink: Image9,
        projectLink: "https://sandeepshaw.herokuapp.com/",
        category: [categoryData[0], categoryData[2], categoryData[3]]
    },
    {
        name: "Multi-Vendor Ecommerce",
        about: "A Multi-Vendor Ecommerce saree website made using Wordpress. Learned key concept like Web Hosting, FTP and Wordpress customization",
        imgLink: Image10,
        projectLink: "https://bishnupursilksaree.co.in/",
        category: [categoryData[0], categoryData[4]]
    },
    {
        name: "Exam Cell Automation",
        about: "Excel and VBA Application to calculate the marks, grade, CGPA, SGPA, and backlog according to the latest MAKAUT Marking System.",
        imgLink: Image11,
        projectLink: "https://sandeepshaw.herokuapp.com/portfolio/project8/",
        category: [categoryData[5], categoryData[6]]
    },
    {
        name: "Message Sender",
        about: "Directly send messages to anyone on WhatsApp and Telegram without saving his/her contact. Team Member: Akash, Arijit, Sitam and Me",
        imgLink: Image7,
        projectLink: "https://www.youtube.com/watch?v=QUcZ84F2KO8",
        category: [categoryData[3]]
    },

]


export {projectData, categoryData}