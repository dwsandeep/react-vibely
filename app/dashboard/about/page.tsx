'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import { useAuth } from '../../hooks/useAuth'

export default function AboutPage() {
  const { isAuthenticated, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/auth/login')
    }
  }, [isAuthenticated, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">About Vibely</h1>
            
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                Vibely is a next-generation social networking platform designed to bring people together in meaningful ways. 
                We believe in the power of genuine connections and shared experiences.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Our mission is to create a safe, inclusive, and engaging space where people can express themselves authentically, 
                share their passions, and build lasting relationships. We&apos;re committed to fostering positive online communities 
                where everyone feels welcome and valued.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Offer</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">Connect with Friends</h3>
                  <p className="text-purple-700">Stay connected with people who matter most in your life.</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-pink-900 mb-2">Share Your Story</h3>
                  <p className="text-pink-700">Express yourself through posts, photos, and creative content.</p>
                </div>
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-indigo-900 mb-2">Join Communities</h3>
                  <p className="text-indigo-700">Find and participate in groups that match your interests.</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-green-900 mb-2">Discover Content</h3>
                  <p className="text-green-700">Explore trending topics and discover new perspectives.</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Our Values</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Authenticity:</strong> We encourage genuine self-expression and honest communication.</li>
                <li><strong>Inclusivity:</strong> We welcome people from all backgrounds and walks of life.</li>
                <li><strong>Safety:</strong> We prioritize user safety and create a secure environment for all.</li>
                <li><strong>Innovation:</strong> We continuously evolve to meet the changing needs of our community.</li>
                <li><strong>Privacy:</strong> We respect your privacy and give you control over your data.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Get Started</h2>
              <p className="text-gray-600 mb-4">
                Ready to join our growing community? Vibely is more than just a social network – it&apos;s a place where 
                friendships flourish and ideas come to life. Whether you&apos;re here to connect with old friends, 
                meet new people, or share your creativity with the world, you&apos;ll find a home at Vibely.
              </p>
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg text-center">
                <p className="text-lg font-medium text-gray-900 mb-4">
                  Join millions of users who are already connecting, sharing, and growing together.
                </p>
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md font-medium transition-colors">
                  Start Your Journey
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
