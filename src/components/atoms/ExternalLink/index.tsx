import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  url: string;
  openInNewTab?: boolean;
  dataTestId?: string;
}

function ExternalLink({
  url,
  openInNewTab = true,
  children,
  dataTestId,
}: Props) {
  return (
    <a
      data-test-id={dataTestId}
      href={url}
      className="underline"
      {...(openInNewTab && { target: "_blank" })}
    >
      {children}
    </a>
  );
}

export default ExternalLink;
