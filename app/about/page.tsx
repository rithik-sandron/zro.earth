import type { Metadata } from "next";

export async function generateMetadata({}): Promise<Metadata | undefined> {
  let ogImage = `https://zro.earth/api/og?title=zro.earth`;

  return {
    title: "About",
    description:
      "Zero has become our cozy corner to let our imaginations run wild.",
    openGraph: {
      title: "About",
      description:
        "Zero has become our cozy corner to let our imaginations run wild.",
      url: "https://zro.earth/about",
      images: [
        {
          url: ogImage,
        },
      ],
    },
  };
}

export default function About() {
  return (
    <div className="about container">
      <p>
        Hey there! 👋{" "}
        <strong>
          <u>The story of Zero</u>
        </strong>{" "}
        began when we needed a space to share our thoughts and get creative.
        Zero has become our cozy corner to let our imaginations run wild and
        we'd like to let you all in on it. Feel right at home and dive into our
        short, fun reads on just about anything! The name Zero signifies the
        starting point for all of us!
      </p>
      <p>
        You might come across a few Japanese words here and there. That's
        because we're huge anime fans and we like using these fancy little
        words, not that we actually know Japanese, haha. 😅
      </p>
      <p>
        We're a team of enthusiastic individuals passionate about researching 🔎
        and writing ✍️ on various topics. The articles you find here are based
        solely on our perspectives 🧠
      </p>

      <h2>Team</h2>
      <li>Rithik Sandron</li>
      <li>Bhavana</li>
      <br />

      <h2>Tip us</h2>
      <p>
        If you see any mistakes or want to share your thoughts, please let us
        know. If you have a topic in mind that you'd like us to explore and
        write about, feel free to reach out to us. We're also working on setting
        up a way to connect with us through social media.
      </p>

      <hr />

      <h2 id="p">Privacy Policy</h2>
      <p>
        We do not collect any data. The theme color is designed to align with
        your system theme, and we ensure that nothing is stored in browser
        storage.
      </p>

      <p>Made with love ♡ and passion 🔥 for writing & sharing.</p>
    </div>
  );
}
