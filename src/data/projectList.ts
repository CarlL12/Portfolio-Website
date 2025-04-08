import { IProject } from "../interface/IProject";

export const projectsList: IProject[] = [
  {
    isPrivate: false,
    title: "JavaScript Backend project",
    description: [
      "In the JavaScript BackEnd course, we built a web app using Blazor where users could order courses. We implemented user management with Identity and connected microservices via Azure Service Bus.",
      "We also created Azure Functions for specific tasks and a Backoffice system to manage users and courses. A highlight was the SignalR-powered chat for real-time communication between users and admins.",
      "The project gave us hands-on experience with modern tech and showed how backend systems and cloud services like Azure can work together in scalable solutions.",
    ],
    techStack: ["Blazor", "ASP.NET", ".NET", "C#", "Azure"],
    gitHubLink:
      "https://github.com/orgs/goteborg-win23-jsbackend/repositories?",
  },

  {
    isPrivate: false,
    title: "Data storage project",
    description: [
      "In this project, I modeled two databases—one for products and one or contacts—using SQL Express and Entity Framework Core.",
      "I used Code First for the contact database and Database First for the product database. A generic repository in a console app enabled consistent and reusable CRUD operations.",
      "              To ensure code quality and functionality, I wrote unit tests with xUnit.",
    ],
    techStack: ["SQL", ".NET", "C#"],
    gitHubLink: "https://github.com/CarlL12/LocalDatabaseProject",
  },
];
