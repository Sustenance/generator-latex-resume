const Generator = require("yeoman-generator");

module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
        this.answers = {};
    }
    initializing() {

        this.log("...................................................................");
        this.log(".             @                                                    ");
        this.log(".`.@@;``      @     @@@:...@@...:+@@            `.@@@.      :@@;.  ");
        this.log(".  @@        ;@;    @      @@      @               @@        @     ");
        this.log(".  @@        :+@    :      @@      :               ;@,      :      ");
        this.log(".  @@       `  @    `      @@                       @@      :      ");
        this.log(".  @@       +  @;          @@       `                @@    @       ");
        this.log(".  @@       .  ;@  .       @@       .                :@:  ;        ");
        this.log(".  @@      .    @`         @@     ::@@@:::::;@@@:     @@  .        ");
        this.log(".  @@      @    @@         @@       `@.        @+      @@@         ");
        this.log(".  @@      .    :@         @@       `@.         @      :@;         ");
        this.log(".  @@     .@@@@@@@.        @@       `@.         @      `@@         ");
        this.log(".  @@     @      @@        @@       `@.         :      + @@        ");
        this.log(".  @@     `   .  .@        @@       `@.     .   .     +  .@;       ");
        this.log(".  @@    :    ;   @.       @@       `@.     .        ``   @@`      ");
        this.log(".  @@    +    :   @@       @@       `@.    `.        +     @@      ");
        this.log(".  @@   :@    .   ;@       @@       `@:,,,+@.       @      .@+     ");
        this.log(".  @@  ,..,  ;   ,...,     @@       `@.    @.      .        @@`    ");
        this.log(".  @@        @             @@       `@.     .      +         @@    ");
        this.log(".  @@      :@@             @@       `@.     .    .@@         @@@   ");
        this.log(".@@@@@@@@@@@@@          @+++;++@    `@.     `  .+@+++       @++++@ ");
        this.log(".                                   `@.          ;                 ");
        this.log(".                                   `@.          .                 ");
        this.log(".                                   `@.         ,                  ");
        this.log(".                                   `@.         @                  ");
        this.log(".                                   .@:       .@@                  ");
        this.log(".                                 ;@@@@@@@@@@@@@@                  ");
        this.log(".                                                                  ");
        this.log(".                                                                  ");


        this.log("Let's bootstrap a resume using LaTeX");
        this.log("This generator will give you a skeleton LaTex file that you can copy/paste sections to finish before compiling.");
        this.log("Currently you must manually run the resulting .tex file through a LaTex compiler (such as TexLive or MacTex).");
    }
    prompting() {
        return this.prompt([{
            type: "input",
            name: "name",
            message: "What is your full name?"
        }, {
            type: "input",
            name: "email",
            message: "What is your email address?"
        }, {
            type: "input",
            name: "phone",
            message: "What is your phone number (optional)?"
        }, {
            type: "input",
            name: "employer",
            message: "What is the name of your most recent (or current) employer?"
        }, {
            type: "input",
            name: "jobTitle",
            message: "What is/was your job title at this employer?"
        }, {
            type: "input",
            name: "jobStartDate",
            message: "When did you start at this job (MM/YYYY)?"
        }, {
            type: "input",
            name: "jobEndDate",
            message: "When did you quit working at this job (MM/YYYY)(optional)?",
            default: "Present"
        }, {
            type: "input",
            name: "jobDescription",
            message: "What is/was one of the responsibilities of this job?"
        }, {
            type: "input",
            name: "schoolName",
            message: "What is the name of the last school you graduated?"
        }, {
            type: "input",
            name: "schoolAward",
            message: "What did you earn (or are currently earning) from that school(ex: Diploma, BS in Computer Science, etc.)?"
        }, {
            type: "input",
            name: "schoolDescription",
            message: "What was included in the coursework for this school program?"
        }, {
            type: "input",
            name: "schoolStartDate",
            message: "When did you start at this school(MM/YYYY)?"
        }, {
            type: "input",
            name: "schoolEndDate",
            message: "When did you finish at this school(MM/YYYY)?",
            default: "Present"
        }, {
            type: "input",
            name: "sampleProjectName",
            message: "What is the name of a sample project or category of sample projects you'd like to showcase(optional)?"
        }, {
            type: "input",
            name: "sampleProjectLocation",
            message: "What is the URL where this work sample can be found?"
        }, {
            type: "input",
            name: "summaryOfQuals",
            message: "Give me a focused, one-line summary of your qualifications(ie: Experienced with UNIX/Linux, Git, ADB, networking): "
        }]).then((answers) => {
            Object.assign(this.answers, answers);
        });
    }
    configuring() {}
    writing() {
        return this.fs.copyTpl(
            this.templatePath("skeleton.tex"),
            this.destinationPath("resume_skeleton.tex"),
            this.answers
        );
    }
    conflicts() {

    }
    install() {

    }
    end() {
        this.log("Now use a LaTex compiler to compile resume_skeleton.tex");
        this.log("You can edit the file using the existing sections as examples to add more content");
    }
};