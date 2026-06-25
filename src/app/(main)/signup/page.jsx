"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, Eye, EyeOff, BookOpen, Globe, User, Mail, Lock, Image as ImageIcon } from "lucide-react";
import { toast } from "react-toastify";
import GooglyEyes from "@/components/GooglyEyes";
import { authClient } from "@/lib/auth-client";

export default function SignupPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const { data, error: authError } = await authClient.signUp.email({
        email,
        password,
        name,
        image: image || undefined,
        callbackURL: "/home",
      });

      if (authError) {
        setError(authError.message || "Failed to create account.");
      } else {
        router.push("/home");
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      setIsUploadingImage(true);
      const formData = new FormData();
      formData.append("image", file);

      const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
      if (!apiKey) {
        toast.error("ImgBB API key is missing. Please add NEXT_PUBLIC_IMGBB_API_KEY to .env");
        setIsUploadingImage(false);
        return;
      }

      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setImage(data.data.url);
        toast.success("Profile photo uploaded! 📸");
      } else {
        toast.error("Failed to upload image.");
      }
    } catch (err) {
      console.error("Image upload error:", err);
      toast.error("An error occurred during upload.");
    } finally {
      setIsUploadingImage(false);
    }
  };

  const handleSocialLogin = async (provider) => {
    try {
      await authClient.signIn.social({
        provider,
        callbackURL: "/home",
      });
    } catch (err) {
      setError(`Failed to sign in with ${provider}.`);
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F6F0DD] flex items-center justify-center pt-32 sm:pt-40 pb-12 px-4 sm:px-8 md:px-12 font-sans text-[#1C1611]">
      {/* Container Card */}
      <div className="w-full max-w-5xl bg-white border-[3.5px] border-[#1C1611] rounded-3xl shadow-[10px_10px_0px_0px_#1C1611] overflow-hidden grid grid-cols-1 md:grid-cols-12 min-h-[650px]">
        
        {/* Left Column: Teal Info Panel */}
        <div className="md:col-span-5 bg-[#4DD0B1] border-b-[3.5px] md:border-b-0 md:border-r-[3.5px] border-[#1C1611] p-8 flex flex-col justify-between text-left relative overflow-hidden">
          {/* Top Logo */}
          <div className="flex items-center gap-3 relative z-10">
            <GooglyEyes className="h-6 w-12" />
            <span className="font-black text-lg tracking-tight uppercase">
              digital life lessons
            </span>
          </div>

          {/* Middle Value Prop */}
          <div className="my-12 relative z-10 space-y-6">
            <h2 className="font-black text-4xl sm:text-5xl tracking-tight leading-[1.1] uppercase italic">
              Begin Your<br />Legacy
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#1C1611]/85 leading-relaxed max-w-sm">
              Capture, distill, and share the wisdom that defines your journey.
            </p>
          </div>

          {/* Bottom Features List */}
          <div className="space-y-4 relative z-10">
            {/* Feature 1 */}
            <div className="flex items-start gap-3 bg-white/20 p-3 rounded-xl border border-[#1C1611]/10">
              <div className="p-2 bg-[#FCD34D] border-[2px] border-[#1C1611] rounded-lg shrink-0 flex items-center justify-center shadow-[2px_2px_0px_0px_#1C1611]">
                <BookOpen className="w-5 h-5 text-[#1C1611]" />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-wider">Private Notebook</h4>
                <p className="text-xs font-bold text-[#1C1611]/70 mt-0.5">
                  A secure space for your rawest reflections.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-3 bg-white/20 p-3 rounded-xl border border-[#1C1611]/10">
              <div className="p-2 bg-white border-[2px] border-[#1C1611] rounded-lg shrink-0 flex items-center justify-center shadow-[2px_2px_0px_0px_#1C1611]">
                <Globe className="w-5 h-5 text-[#1C1611]" />
              </div>
              <div>
                <h4 className="font-black text-xs uppercase tracking-wider">Public Lessons</h4>
                <p className="text-xs font-bold text-[#1C1611]/70 mt-0.5">
                  Transform insights into editorial content.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Form Panel */}
        <div className="md:col-span-7 p-8 sm:p-12 flex flex-col justify-center bg-white text-left">
          
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#1C1611]">
              Create Account
            </h1>
            <p className="text-sm font-bold text-[#1C1611]/60 mt-1">
              Join a community of thinkers and creators.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSignup} className="space-y-5">
            {error && (
              <div className="p-4 bg-red-100 border-[2.5px] border-[#ba1a1a] rounded-xl text-xs font-black text-[#ba1a1a] uppercase shadow-[2.5px_2.5px_0px_0px_#ba1a1a]">
                ⚠️ {error}
              </div>
            )}

            {/* Profile Image Uploader */}
            <div className="flex flex-col items-center justify-center mb-6 mt-2">
              <div className="relative w-24 h-24 rounded-full border-[3px] border-[#1C1611] bg-[#f7f9fb] shadow-[4px_4px_0px_0px_#1C1611] flex items-center justify-center overflow-hidden group">
                {image ? (
                  <>
                    <img src={image} alt="Profile" className="w-full h-full object-cover" />
                    <button
                      type="button"
                      onClick={() => setImage("")}
                      className="absolute inset-0 bg-black/60 text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    >
                      Remove
                    </button>
                  </>
                ) : (
                  <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer hover:bg-[#F6F0DD]/50 transition-colors">
                    <input type="file" accept="image/*" onChange={handleImageUpload} disabled={isUploadingImage} className="hidden" />
                    {isUploadingImage ? (
                      <div className="w-6 h-6 border-[3px] border-[#1C1611] border-t-[#FF4A3A] rounded-full animate-spin" />
                    ) : (
                      <div className="flex flex-col items-center gap-1.5 mt-1">
                        <ImageIcon className="w-6 h-6 text-[#1C1611]/40 stroke-[2.5px]" />
                        <span className="text-[8px] font-black uppercase tracking-wider text-[#1C1611]/50">Photo</span>
                      </div>
                    )}
                  </label>
                )}
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1C1611]">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1C1611]/50">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Elias Thorne"
                  required
                  className="w-full bg-[#f7f9fb] border-[2.5px] border-[#1C1611] rounded-xl pl-10 pr-4 py-3 text-sm text-[#1C1611] font-bold placeholder-[#1C1611]/40 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1C1611]">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1C1611]/50">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="elias@domain.com"
                  required
                  className="w-full bg-[#f7f9fb] border-[2.5px] border-[#1C1611] rounded-xl pl-10 pr-4 py-3 text-sm text-[#1C1611] font-bold placeholder-[#1C1611]/40 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <label className="block text-xs font-black uppercase tracking-wider text-[#1C1611]">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#1C1611]/50">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full bg-[#f7f9fb] border-[2.5px] border-[#1C1611] rounded-xl pl-10 pr-10 py-3 text-sm text-[#1C1611] font-bold placeholder-[#1C1611]/40 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#1C1611]/50 hover:text-[#1C1611]"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Create Account Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#FF4A3A] text-white font-black uppercase text-center py-4 rounded-xl border-[2.5px] border-[#1C1611] shadow-[4px_4px_0px_0px_#1C1611] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#1C1611] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <span>{loading ? "Creating Account..." : "Create Account"}</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5px]" />
            </button>
          </form>

          {/* Social Sign Up */}
          <div className="mt-8 space-y-6">
            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t-2 border-[#1C1611]"></div>
              <span className="flex-shrink mx-4 text-xs font-black uppercase tracking-wider text-[#1C1611]/60">
                Or Sign Up With
              </span>
              <div className="flex-grow border-t-2 border-[#1C1611]"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="flex items-center justify-center gap-2 py-3 border-[2.5px] border-[#1C1611] rounded-xl hover:bg-[#F6F0DD]/20 active:bg-[#F6F0DD]/40 transition-all font-black text-xs uppercase"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114-3.486 0-6.31-2.825-6.31-6.31s2.824-6.31 6.31-6.31c1.529 0 2.923.548 4.01 1.458l3.11-3.11C18.96 2.27 15.82 1 12.24 1 5.866 1 .69 6.176.69 12.55s5.176 11.55 11.55 11.55c6.31 0 11.378-5.068 11.378-11.378 0-.82-.072-1.614-.207-2.385H12.24z"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("apple")}
                className="flex items-center justify-center gap-2 py-3 border-[2.5px] border-[#1C1611] rounded-xl hover:bg-[#F6F0DD]/20 active:bg-[#F6F0DD]/40 transition-all font-black text-xs uppercase"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.12.02.24.03.36.03.84 0 1.96-.54 2.45-1.36z" />
                </svg>
                Apple
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <div className="mt-8 text-center text-sm font-bold">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[#4f46e5] underline hover:text-[#3525cd] font-black transition-colors"
            >
              Log In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
