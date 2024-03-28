import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function matchItem(string, data) {
  var i = 0,
    j = 0,
    html = "",
    regex,
    regexv,
    match,
    matches,
    version;

  for (i = 0; i < data.length; i += 1) {
    regex = new RegExp(data[i].value, "i");
    match = regex.test(string);
    if (match) {
      regexv = new RegExp(data[i].version + "[- /:;]([d._]+)", "i");
      matches = string.match(regexv);
      version = "";
      if (matches) {
        if (matches[1]) {
          matches = matches[1];
        }
      }
      if (matches) {
        matches = matches.split(/[._]+/);
        for (j = 0; j < matches.length; j += 1) {
          if (j === 0) {
            version += matches[j] + ".";
          } else {
            version += matches[j];
          }
        }
      } else {
        version = "0";
      }
      return {
        name: data[i].name,
        version: parseFloat(version),
      };
    }
  }
  return { name: "unknown", version: 0 };
}

function ErrorMessage() {
  const os = [
    { name: "Windows Phone", value: "Windows Phone", version: "OS" },
    { name: "Windows", value: "Win", version: "NT" },
    { name: "iPhone", value: "iPhone", version: "OS" },
    { name: "iPad", value: "iPad", version: "OS" },
    { name: "Kindle", value: "Silk", version: "Silk" },
    { name: "Android", value: "Android", version: "Android" },
    { name: "PlayBook", value: "PlayBook", version: "OS" },
    { name: "BlackBerry", value: "BlackBerry", version: "/" },
    { name: "Macintosh", value: "Mac", version: "OS X" },
    { name: "Linux", value: "Linux", version: "rv" },
    { name: "Palm", value: "Palm", version: "PalmOS" },
  ];
  const browser = [
    { name: "Chrome", value: "Chrome", version: "Chrome" },
    { name: "Firefox", value: "Firefox", version: "Firefox" },
    { name: "Safari", value: "Safari", version: "Version" },
    { name: "Internet Explorer", value: "MSIE", version: "MSIE" },
    { name: "Opera", value: "Opera", version: "Opera" },
    { name: "BlackBerry", value: "CLDC", version: "CLDC" },
    { name: "Mozilla", value: "Mozilla", version: "Mozilla" },
  ];
  const header = [
    navigator.platform,
    navigator.userAgent,
    navigator.appVersion,
    navigator.vendor,
    window.opera,
  ];

  const agent = header.join(" ");
  const thisOs = matchItem(agent, os);
  const thisBrowser = matchItem(agent, browser);
  return (
    <div className="my-8 mx-8 text-center">
      <h1 className="text-2xl font-bold text-center">
        This application only support for android
      </h1>
      <p className="text-xl font-semibold pt-4">
        Browser: {thisBrowser.name}{" "}
        {thisBrowser.version != 0 ? `v${thisBrowser.version}` : ""}
      </p>
      <p className="text-xl font-semibold">Operating System: {thisOs.name}</p>
      <p className="text-xl font-semibold">
        Screen Width: {window.innerWidth}px
      </p>
    </div>
  );
}

export default function CheckAndroidOrDesktop() {
  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);
    return () => window.removeEventListener("resize", handleWindowChange);
  }, []);

  if (width >= 640) return <ErrorMessage />; // check if width > 640px

  return <Outlet />;
}
