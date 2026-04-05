import { siteConfig } from "@/lib/data/site";

type Props = {
  className?: string;
};

export function ContactInline({ className = "" }: Props) {
  return (
    <p className={`text-sm text-slate-600 ${className}`.trimEnd()}>
      <span className="font-medium text-[#0a1628]">{siteConfig.legalName}</span>
      {" · "}
      <a
        href={`tel:${siteConfig.phoneTel}`}
        className="text-[#F37021] hover:underline"
      >
        {siteConfig.phoneDisplay}
      </a>
      {" · "}
      <a
        href={`mailto:${siteConfig.email}`}
        className="text-[#F37021] hover:underline"
      >
        {siteConfig.email}
      </a>
    </p>
  );
}
