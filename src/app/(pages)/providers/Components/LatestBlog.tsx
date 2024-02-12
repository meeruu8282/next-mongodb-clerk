import React from 'react'

const LatestBlog = () => {
  return (
    <section className="lastest-blogposts my-12 px-5 border mx-12">
                        <div className="container mx-auto">
                                <h2 className="text-2xl font-bold">Latest Blog</h2>
                                <p className="font-thin my-5">Explore our blog categories to discover articles written by our team of expert healthcare professionals</p>
                                <div className="blogposts flex justify-between">
                                    <div className="large-post w-2/5">
                                        <div className="post-image">
                                            {/* <img src="/public/" alt="doctor" /> */}
                                            <div className="placeholder bg-green-200 h-[24vh] rounded-2xl">
                                                <h2 className="placeholder text-3xl text-center my-auto">Placeholder</h2>
                                            </div>
                                        </div>
                                        <div className="post-content mt-10">
                                            <h3 className="text-2xl font-bold">The Importance of Mental Health</h3>
                                            <p className="font-thin my-5">Mental health is an important aspect of our overall health. It affects how we think, feel, and act. It also helps determine how we handle stress, relate to others, and make choices. Mental health is important at every stage of life, from childhood and adolescence through adulthood.</p>
                                        </div>
                                    </div>
                                    <div className="smaller-posts w-2/5 flex     flex-col">
                                        <div className="small-post w-full my-5 flex gap-3">
                                            <div className="post-image">
                                        <div className="placeholder w-24 h-24 bg-red-200 rounded-3xl"></div>
                                            </div>
                                            <div className="post-content mt-5">
                                            <h4 className="text-[#45AC60]"> X hours ago</h4>
                                                <h3 className="text-xl font-bold">The Importance of Mental Health</h3>
                                            </div>

                                        </div>
                                        <div className="small-post w-full my-5 flex  gap-3">
                                            <div className="post-image">
                                            <div className="placeholder w-24 h-24 bg-red-200 rounded-3xl"></div>
                                            </div>
                                            <div className="post-content mt-5">
                                            <h4 className="text-[#45AC60]"> X hours ago</h4>
                                                <h3 className="text-xl font-bold">The Importance of Mental Health</h3>
                                            </div>

                                        </div>
                                        <div className="small-post w-full my-5 flex gap-3">
                                            <div className="post-image">
                                            <div className="placeholder w-24 h-24 bg-red-200 rounded-3xl"></div>
                                            </div>
                                            <div className="post-content mt-5">
                                            <h4 className="text-[#45AC60]"> X hours ago</h4>
                                                <h3 className="text-xl font-bold">The Importance of Mental Health</h3>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                        </div>
                </section>
  )
}

export default LatestBlog
