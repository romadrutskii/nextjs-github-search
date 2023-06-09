import type { Meta, StoryObj } from "@storybook/react";
import RepositoryCard from ".";

const meta: Meta<typeof RepositoryCard> = {
  title: "Example/RepositoryCard",
  component: RepositoryCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <div className="p-24">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RepositoryCard>;

export const DefaultStory: Story = {
  args: {
    id: 688352,
    node_id: "MDEwOlJlcG9zaXRvcnk2ODgzNTI=",
    name: "jmeter",
    full_name: "apache/jmeter",
    private: false,
    owner: {
      login: "apache",
      id: 47359,
      node_id: "MDEyOk9yZ2FuaXphdGlvbjQ3MzU5",
      avatar_url: "https://avatars.githubusercontent.com/u/47359?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/apache",
      html_url: "https://github.com/apache",
      followers_url: "https://api.github.com/users/apache/followers",
      following_url:
        "https://api.github.com/users/apache/following{/other_user}",
      gists_url: "https://api.github.com/users/apache/gists{/gist_id}",
      starred_url: "https://api.github.com/users/apache/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/apache/subscriptions",
      organizations_url: "https://api.github.com/users/apache/orgs",
      repos_url: "https://api.github.com/users/apache/repos",
      events_url: "https://api.github.com/users/apache/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/apache/received_events",
      type: "Organization",
      site_admin: false,
    },
    html_url: "https://github.com/apache/jmeter",
    description:
      "Apache JMeter open-source load testing tool for analyzing and measuring the performance of a variety of services",
    fork: false,
    url: "https://api.github.com/repos/apache/jmeter",
    forks_url: "https://api.github.com/repos/apache/jmeter/forks",
    keys_url: "https://api.github.com/repos/apache/jmeter/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/apache/jmeter/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/apache/jmeter/teams",
    hooks_url: "https://api.github.com/repos/apache/jmeter/hooks",
    issue_events_url:
      "https://api.github.com/repos/apache/jmeter/issues/events{/number}",
    events_url: "https://api.github.com/repos/apache/jmeter/events",
    assignees_url:
      "https://api.github.com/repos/apache/jmeter/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/apache/jmeter/branches{/branch}",
    tags_url: "https://api.github.com/repos/apache/jmeter/tags",
    blobs_url: "https://api.github.com/repos/apache/jmeter/git/blobs{/sha}",
    git_tags_url: "https://api.github.com/repos/apache/jmeter/git/tags{/sha}",
    git_refs_url: "https://api.github.com/repos/apache/jmeter/git/refs{/sha}",
    trees_url: "https://api.github.com/repos/apache/jmeter/git/trees{/sha}",
    statuses_url: "https://api.github.com/repos/apache/jmeter/statuses/{sha}",
    languages_url: "https://api.github.com/repos/apache/jmeter/languages",
    stargazers_url: "https://api.github.com/repos/apache/jmeter/stargazers",
    contributors_url: "https://api.github.com/repos/apache/jmeter/contributors",
    subscribers_url: "https://api.github.com/repos/apache/jmeter/subscribers",
    subscription_url: "https://api.github.com/repos/apache/jmeter/subscription",
    commits_url: "https://api.github.com/repos/apache/jmeter/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/apache/jmeter/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/apache/jmeter/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/apache/jmeter/issues/comments{/number}",
    contents_url: "https://api.github.com/repos/apache/jmeter/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/apache/jmeter/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/apache/jmeter/merges",
    archive_url:
      "https://api.github.com/repos/apache/jmeter/{archive_format}{/ref}",
    downloads_url: "https://api.github.com/repos/apache/jmeter/downloads",
    issues_url: "https://api.github.com/repos/apache/jmeter/issues{/number}",
    pulls_url: "https://api.github.com/repos/apache/jmeter/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/apache/jmeter/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/apache/jmeter/notifications{?since,all,participating}",
    labels_url: "https://api.github.com/repos/apache/jmeter/labels{/name}",
    releases_url: "https://api.github.com/repos/apache/jmeter/releases{/id}",
    deployments_url: "https://api.github.com/repos/apache/jmeter/deployments",
    created_at: "2010-05-26T23:38:07Z",
    updated_at: "2023-05-03T19:36:16Z",
    pushed_at: "2023-05-03T19:23:31Z",
    git_url: "git://github.com/apache/jmeter.git",
    ssh_url: "git@github.com:apache/jmeter.git",
    clone_url: "https://github.com/apache/jmeter.git",
    svn_url: "https://github.com/apache/jmeter",
    homepage: "https://jmeter.apache.org/",
    size: 85354,
    stargazers_count: 6961,
    watchers_count: 6961,
    language: "Java",
    has_issues: true,
    has_projects: false,
    has_downloads: true,
    has_wiki: false,
    has_pages: false,
    has_discussions: false,
    forks_count: 1868,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 685,
    license: {
      key: "apache-2.0",
      name: "Apache License 2.0",
      spdx_id: "Apache-2.0",
      url: "https://api.github.com/licenses/apache-2.0",
      node_id: "MDc6TGljZW5zZTI=",
    },
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: ["java", "performance", "test"],
    visibility: "public",
    forks: 1868,
    open_issues: 685,
    watchers: 6961,
    default_branch: "master",
    score: 1,
  },
};
