"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.post2 = void 0;
exports.post2 = {
    title: 'Post 2',
    slug: 'post-2',
    _status: 'published',
    meta: {
        title: 'Post 2',
        description: 'This is the second post.',
        image: '{{IMAGE}}',
    },
    authors: ['{{AUTHOR}}'],
    hero: {
        type: 'lowImpact',
        links: null,
        richText: [
            {
                children: [
                    {
                        text: 'Post 2',
                    },
                ],
                type: 'h1',
            },
        ],
        media: null,
    },
    layout: [
        {
            blockType: 'content',
            columns: [
                {
                    size: 'twoThirds',
                    richText: [
                        {
                            children: [
                                {
                                    text: "This content is completely dynamic using custom layout building blocks configured in the CMS. This can be anything you'd like from rich text and images, to highly designed, complex components.",
                                },
                            ],
                        },
                    ],
                    link: {
                        reference: {
                            relationTo: 'pages',
                            value: '',
                        },
                        url: '',
                        label: '',
                    },
                },
            ],
        },
    ],
    enablePremiumContent: true,
    premiumContent: [
        {
            blockType: 'content',
            columns: [
                {
                    size: 'twoThirds',
                    richText: [
                        {
                            children: [
                                {
                                    text: 'This is premium content.',
                                    bold: true,
                                },
                                {
                                    text: ' It is only available to authenticated users. This content can be anything from additional video, text, and content, to download links and more. These are simply layout building blocks configured in the CMS.',
                                },
                            ],
                        },
                    ],
                    link: {
                        reference: {
                            relationTo: 'pages',
                            value: '',
                        },
                        url: '',
                        label: '',
                    },
                },
            ],
        },
    ],
    relatedPosts: [], // this is populated by the seed script
};
