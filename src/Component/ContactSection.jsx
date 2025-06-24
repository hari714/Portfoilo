import { Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In<span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-6 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.<br />
          I'm always open to exciting opportunities, especially those that challenge my skills and help me grow.<br />
          Looking for someone to join your team? Let's connect and see if we're a good fit!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-8 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:harikrish54455@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    harikrish54455@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917010984214"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91 7010984214
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Namakkal, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Social Links */}
          <div className="flex flex-col items-center justify-center">
            <h4 className="text-2xl font-semibold mb-4">Connect With Me</h4>
            <div className="flex space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer"><Linkedin className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Twitter className="h-6 w-6" /></a>
              <a href="#" target="_blank" rel="noopener noreferrer"><Github className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
