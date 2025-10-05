import Link from "next/link";
import { LinkTo } from "./styles";

const ContactUsButton = ({ padding }: { padding: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
        color: "white",
      }}
      href="/"
    >
      Contact Us
    </LinkTo>
  );
};

export default ContactUsButton;
