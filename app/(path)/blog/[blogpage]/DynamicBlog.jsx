'use client';

import React, { useEffect, useState } from 'react';
import './DynamicBlog.scss';
import { getSingleBlog } from '@/api/BlogAPIs';
import { Container } from 'react-bootstrap';
import PreLoader from '@/components/PreLoader';
import Cookies from 'js-cookie';

const DynamicBlog = () => {
    const [blogIdGet, setBlogIdGet] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogTitleImage, setBlogTitleImage] = useState('');
    const [blogSubTitleContent, setBlogSubTitleContent] = useState('');
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const id = Cookies.get('blogId');
        if (id) {
            setBlogIdGet(id);
        }
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            if (!blogIdGet) return;

            try {
                setLoading(true);

                const response = await getSingleBlog(blogIdGet);

                if (response?.data) {
                    setBlogTitle(response.data.title || '');
                    setBlogTitleImage(response.data.titleImage || '');
                    setBlogSubTitleContent(
                        response.data.subtitleContent || ''
                    );
                    setBlogData(response.data.contentSections || []);
                } else {
                    console.error('Failed to fetch blog data');
                }
            } catch (error) {
                console.error('Failed to fetch blog data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [blogIdGet]);

    const getImageUrl = (image = '') => {
        if (!image) return '';
        if (
            image.startsWith('http://') ||
            image.startsWith('https://')
        ) {
            return image;
        }
        const baseUrl = process.env.NEXT_PUBLIC_IMAGE_URL || '';
        return `${baseUrl.replace(/\/$/, '')}/${image.replace(/^\//, '')}`;
    };

    const boldContentAfterColon = (text = '') => {
        const parts = text.split('<br>');

        return {
            __html: parts
                .map((part) => {
                    const colonIndex = part.indexOf(':');

                    if (colonIndex !== -1) {
                        return `<strong>${part.substring(
                            0,
                            colonIndex + 1
                        )}</strong>${part.substring(colonIndex + 1)}`;
                    }

                    return part;
                })
                .join('<br />'),
        };
    };

    if (loading) {
        return <PreLoader />;
    }

    if (!blogData?.length) {
        return <p>No blog data available.</p>;
    }

    return (
        <div>
            <section className="dynamic-blog-title-content">
                <Container>
                    <div>
                        {blogTitle && (
                            <h1 className="text-center">
                                {blogTitle}
                            </h1>
                        )}

                        {blogTitleImage && (
                            <div className="w-full aspect-[16/7] overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    src={getImageUrl(blogTitleImage)}
                                    alt={blogTitle || 'Blog image'}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        )}

                        {blogSubTitleContent && (
                            <div className="dynamic-blog-subtitle-content mt-5">
                                <p
                                    className="text-center"
                                    dangerouslySetInnerHTML={boldContentAfterColon(
                                        blogSubTitleContent
                                    )}
                                />
                            </div>
                        )}
                    </div>
                </Container>
            </section>

            <Container>
                {blogData.map((data, index) => (
                    <div
                        key={data?._id || index}
                        className="blog-section"
                    >
                        <div className="flex justify-center">
                            <div className="flex justify-center w-full px-2 md:px-0">
                                <div className="w-full max-w-4xl flex flex-col gap-6 py-8 overflow-hidden">
                                    {data?.blogTitle && (
                                        <h2 className="text-center text-gray-900 text-xl md:text-3xl font-bold px-2">
                                            {data.blogTitle}
                                        </h2>
                                    )}

                                    {data?.blogImage && (
                                        <div className="w-full">
                                            <img
                                                src={getImageUrl(
                                                    data.blogImage
                                                )}
                                                alt={
                                                    data?.blogTitle ||
                                                    blogTitle ||
                                                    `Blog section ${index + 1}`
                                                }
                                                className="w-full h-auto rounded-2xl shadow-lg object-cover max-h-[300px] md:max-h-[500px]"
                                                loading={
                                                    index === 0
                                                        ? 'eager'
                                                        : 'lazy'
                                                }
                                            />
                                        </div>
                                    )}

                                    {data?.content && (
                                        <div
                                            className="text-gray-700 leading-loose text-[16px] md:text-[18px] w-full break-words px-2"
                                            dangerouslySetInnerHTML={boldContentAfterColon(
                                                data.content
                                            )}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>
        </div>
    );
};

export default DynamicBlog;