import type { Route } from "next";

export const SITE_NAME = "快看水母";
export const SITE_DESCRIPTION =
  "快看水母-水木社区客户端。无广告 帖子原汁原味，连签名都完美呈现 显示IP地址地理位置 网址自动解析摘要 引用过长时自动折叠字体大小自定义，可大可小才舒服 记录浏览位置，不必次次从头再来 用户可标注、可屏蔽。 帖子可生成图片或PDF轻松保存分享。左右滑动可跳转板块，右滑动退出浏览帖子。阅读也可以时刻纵享丝滑。人性化提取帖子中链接内容，阅后再决定是否去点击链接。自动保存未发布的草稿。";
export const SITE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://simplestone.cn";

export const SITE_DOMAIN = new URL(SITE_URL).hostname;
export const PASSWORD_RESET_TOKEN_EXPIRATION_SECONDS = 24 * 60 * 60; // 24 hours
export const EMAIL_VERIFICATION_TOKEN_EXPIRATION_SECONDS = 24 * 60 * 60; // 24 hours
export const MAX_SESSIONS_PER_USER = 5;
export const MAX_TEAMS_CREATED_PER_USER = 3;
export const MAX_TEAMS_JOINED_PER_USER = 10;
export const SESSION_COOKIE_NAME = "session";
export const GOOGLE_OAUTH_STATE_COOKIE_NAME = "google-oauth-state";
export const GOOGLE_OAUTH_CODE_VERIFIER_COOKIE_NAME =
  "google-oauth-code-verifier";

export const CREDIT_PACKAGES = [
  { id: "package-1", credits: 500, price: 5 },
  { id: "package-2", credits: 1200, price: 10 },
  { id: "package-3", credits: 3000, price: 20 },
] as const;

export const CREDITS_EXPIRATION_YEARS = 2;

export const FREE_MONTHLY_CREDITS = CREDIT_PACKAGES[0].credits * 0.1;
export const MAX_TRANSACTIONS_PER_PAGE = 10;
export const REDIRECT_AFTER_SIGN_IN = "/dashboard" as Route;
