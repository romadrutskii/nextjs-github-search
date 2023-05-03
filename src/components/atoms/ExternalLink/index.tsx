import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  url: string;
  openInNewTab?: boolean;
}

function ExternalLink({ url, openInNewTab = true, children }: Props) {
  return (
    <a
      href={url}
      className="underline"
      {...(openInNewTab && { target: "_blank" })}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
