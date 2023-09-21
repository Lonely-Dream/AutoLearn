using OpenQA.Selenium.Chrome;

namespace AutoLearn
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(Form1));
            button1 = new Button();
            listBox1 = new ListBox();
            groupBox1 = new GroupBox();
            checkBox1 = new CheckBox();
            numericUpDown1 = new NumericUpDown();
            checkBoxAutoEvaluate = new CheckBox();
            label2 = new Label();
            textBoxPassword = new TextBox();
            label1 = new Label();
            textBoxUsername = new TextBox();
            button2 = new Button();
            groupBox2 = new GroupBox();
            buttonLearnGXK = new Button();
            label3 = new Label();
            textBoxPassword2 = new TextBox();
            label4 = new Label();
            textBoxUsername2 = new TextBox();
            dateTimePicker1 = new DateTimePicker();
            dateTimePicker2 = new DateTimePicker();
            label5 = new Label();
            label6 = new Label();
            button3 = new Button();
            textBoxServerURL = new TextBox();
            button4 = new Button();
            groupBox1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).BeginInit();
            groupBox2.SuspendLayout();
            SuspendLayout();
            // 
            // button1
            // 
            button1.Location = new Point(12, 12);
            button1.Name = "button1";
            button1.Size = new Size(80, 28);
            button1.TabIndex = 0;
            button1.Text = "启动";
            button1.UseVisualStyleBackColor = true;
            button1.Click += button1_Click;
            // 
            // listBox1
            // 
            listBox1.FormattingEnabled = true;
            listBox1.HorizontalScrollbar = true;
            listBox1.ItemHeight = 17;
            listBox1.Location = new Point(12, 149);
            listBox1.Name = "listBox1";
            listBox1.ScrollAlwaysVisible = true;
            listBox1.Size = new Size(814, 242);
            listBox1.TabIndex = 2;
            // 
            // groupBox1
            // 
            groupBox1.Controls.Add(checkBox1);
            groupBox1.Controls.Add(numericUpDown1);
            groupBox1.Controls.Add(checkBoxAutoEvaluate);
            groupBox1.Controls.Add(label2);
            groupBox1.Controls.Add(textBoxPassword);
            groupBox1.Controls.Add(label1);
            groupBox1.Controls.Add(textBoxUsername);
            groupBox1.Location = new Point(244, 12);
            groupBox1.Name = "groupBox1";
            groupBox1.Size = new Size(288, 105);
            groupBox1.TabIndex = 3;
            groupBox1.TabStop = false;
            groupBox1.Text = "专业课设置";
            // 
            // checkBox1
            // 
            checkBox1.AutoSize = true;
            checkBox1.Location = new Point(162, 55);
            checkBox1.Name = "checkBox1";
            checkBox1.Size = new Size(75, 21);
            checkBox1.TabIndex = 7;
            checkBox1.Text = "是否倍速";
            checkBox1.UseVisualStyleBackColor = true;
            checkBox1.CheckedChanged += checkBox1_CheckedChanged;
            // 
            // numericUpDown1
            // 
            numericUpDown1.Enabled = false;
            numericUpDown1.Location = new Point(237, 53);
            numericUpDown1.Name = "numericUpDown1";
            numericUpDown1.ReadOnly = true;
            numericUpDown1.Size = new Size(45, 23);
            numericUpDown1.TabIndex = 6;
            numericUpDown1.Value = new decimal(new int[] { 1, 0, 0, 0 });
            numericUpDown1.ValueChanged += numericUpDown1_ValueChanged;
            // 
            // checkBoxAutoEvaluate
            // 
            checkBoxAutoEvaluate.AutoSize = true;
            checkBoxAutoEvaluate.Checked = true;
            checkBoxAutoEvaluate.CheckState = CheckState.Checked;
            checkBoxAutoEvaluate.Location = new Point(162, 26);
            checkBoxAutoEvaluate.Name = "checkBoxAutoEvaluate";
            checkBoxAutoEvaluate.Size = new Size(99, 21);
            checkBoxAutoEvaluate.TabIndex = 4;
            checkBoxAutoEvaluate.Text = "是否自动评价";
            checkBoxAutoEvaluate.UseVisualStyleBackColor = true;
            // 
            // label2
            // 
            label2.AutoSize = true;
            label2.Location = new Point(6, 56);
            label2.Name = "label2";
            label2.Size = new Size(44, 17);
            label2.TabIndex = 3;
            label2.Text = "密码：";
            // 
            // textBoxPassword
            // 
            textBoxPassword.Location = new Point(56, 53);
            textBoxPassword.Name = "textBoxPassword";
            textBoxPassword.PasswordChar = '*';
            textBoxPassword.Size = new Size(100, 23);
            textBoxPassword.TabIndex = 2;
            textBoxPassword.TextChanged += textBoxPassword_TextChanged;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(6, 27);
            label1.Name = "label1";
            label1.Size = new Size(44, 17);
            label1.TabIndex = 1;
            label1.Text = "账号：";
            // 
            // textBoxUsername
            // 
            textBoxUsername.Location = new Point(56, 24);
            textBoxUsername.Name = "textBoxUsername";
            textBoxUsername.Size = new Size(100, 23);
            textBoxUsername.TabIndex = 0;
            textBoxUsername.TextChanged += textBoxUsername_TextChanged;
            // 
            // button2
            // 
            button2.Location = new Point(125, 12);
            button2.Name = "button2";
            button2.Size = new Size(80, 28);
            button2.TabIndex = 4;
            button2.Text = "开始学习";
            button2.UseVisualStyleBackColor = true;
            button2.Click += button2_Click;
            // 
            // groupBox2
            // 
            groupBox2.Controls.Add(buttonLearnGXK);
            groupBox2.Controls.Add(label3);
            groupBox2.Controls.Add(textBoxPassword2);
            groupBox2.Controls.Add(label4);
            groupBox2.Controls.Add(textBoxUsername2);
            groupBox2.Location = new Point(538, 12);
            groupBox2.Name = "groupBox2";
            groupBox2.Size = new Size(288, 105);
            groupBox2.TabIndex = 5;
            groupBox2.TabStop = false;
            groupBox2.Text = "公需课设置";
            // 
            // buttonLearnGXK
            // 
            buttonLearnGXK.Location = new Point(196, 54);
            buttonLearnGXK.Name = "buttonLearnGXK";
            buttonLearnGXK.Size = new Size(86, 23);
            buttonLearnGXK.TabIndex = 4;
            buttonLearnGXK.Text = "学习公需课";
            buttonLearnGXK.UseVisualStyleBackColor = true;
            buttonLearnGXK.Click += buttonLearnGXK_Click;
            // 
            // label3
            // 
            label3.AutoSize = true;
            label3.Location = new Point(6, 56);
            label3.Name = "label3";
            label3.Size = new Size(44, 17);
            label3.TabIndex = 3;
            label3.Text = "密码：";
            // 
            // textBoxPassword2
            // 
            textBoxPassword2.Location = new Point(56, 53);
            textBoxPassword2.Name = "textBoxPassword2";
            textBoxPassword2.PasswordChar = '*';
            textBoxPassword2.Size = new Size(100, 23);
            textBoxPassword2.TabIndex = 2;
            textBoxPassword2.TextChanged += textBoxPassword2_TextChanged;
            // 
            // label4
            // 
            label4.AutoSize = true;
            label4.Location = new Point(6, 27);
            label4.Name = "label4";
            label4.Size = new Size(44, 17);
            label4.TabIndex = 1;
            label4.Text = "账号：";
            // 
            // textBoxUsername2
            // 
            textBoxUsername2.Location = new Point(56, 24);
            textBoxUsername2.Name = "textBoxUsername2";
            textBoxUsername2.Size = new Size(226, 23);
            textBoxUsername2.TabIndex = 0;
            textBoxUsername2.TextChanged += textBoxUsername2_TextChanged;
            // 
            // dateTimePicker1
            // 
            dateTimePicker1.CustomFormat = "yyyy-MM-dd";
            dateTimePicker1.Format = DateTimePickerFormat.Custom;
            dateTimePicker1.Location = new Point(12, 62);
            dateTimePicker1.Name = "dateTimePicker1";
            dateTimePicker1.Size = new Size(107, 23);
            dateTimePicker1.TabIndex = 6;
            dateTimePicker1.Value = new DateTime(2022, 9, 15, 0, 0, 0, 0);
            dateTimePicker1.ValueChanged += dateTimePicker1_ValueChanged;
            // 
            // dateTimePicker2
            // 
            dateTimePicker2.CustomFormat = "yyyy-MM-dd";
            dateTimePicker2.Format = DateTimePickerFormat.Custom;
            dateTimePicker2.Location = new Point(125, 62);
            dateTimePicker2.Name = "dateTimePicker2";
            dateTimePicker2.Size = new Size(107, 23);
            dateTimePicker2.TabIndex = 7;
            dateTimePicker2.Value = new DateTime(2022, 9, 30, 15, 20, 43, 0);
            dateTimePicker2.ValueChanged += dateTimePicker2_ValueChanged;
            // 
            // label5
            // 
            label5.AutoSize = true;
            label5.Location = new Point(125, 92);
            label5.Name = "label5";
            label5.Size = new Size(44, 17);
            label5.TabIndex = 8;
            label5.Text = "学时：";
            // 
            // label6
            // 
            label6.AutoSize = true;
            label6.Location = new Point(125, 115);
            label6.Name = "label6";
            label6.Size = new Size(44, 17);
            label6.TabIndex = 9;
            label6.Text = "学分：";
            // 
            // button3
            // 
            button3.Location = new Point(12, 92);
            button3.Name = "button3";
            button3.Size = new Size(80, 40);
            button3.TabIndex = 10;
            button3.Text = "查询";
            button3.UseVisualStyleBackColor = true;
            button3.Click += button3_Click;
            // 
            // textBoxServerURL
            // 
            textBoxServerURL.Location = new Point(538, 120);
            textBoxServerURL.Name = "textBoxServerURL";
            textBoxServerURL.Size = new Size(194, 23);
            textBoxServerURL.TabIndex = 11;
            textBoxServerURL.Text = "http://172.10.50.229:12345";
            // 
            // button4
            // 
            button4.Location = new Point(751, 120);
            button4.Name = "button4";
            button4.Size = new Size(75, 23);
            button4.TabIndex = 12;
            button4.Text = "检查更新";
            button4.UseVisualStyleBackColor = true;
            button4.Click += button4_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(7F, 17F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(838, 406);
            Controls.Add(button4);
            Controls.Add(textBoxServerURL);
            Controls.Add(button3);
            Controls.Add(label6);
            Controls.Add(label5);
            Controls.Add(dateTimePicker2);
            Controls.Add(dateTimePicker1);
            Controls.Add(groupBox2);
            Controls.Add(button2);
            Controls.Add(groupBox1);
            Controls.Add(listBox1);
            Controls.Add(button1);
            Icon = (Icon)resources.GetObject("$this.Icon");
            Name = "Form1";
            Text = "AutoLearn";
            FormClosing += Form1_Closing;
            Shown += Form1_Shown;
            groupBox1.ResumeLayout(false);
            groupBox1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)numericUpDown1).EndInit();
            groupBox2.ResumeLayout(false);
            groupBox2.PerformLayout();
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private Button button1;
        private ListBox listBox1;
        private GroupBox groupBox1;
        private Label label2;
        private TextBox textBoxPassword;
        private Label label1;
        private TextBox textBoxUsername;
        private Button button2;
        private CheckBox checkBoxAutoEvaluate;
        private GroupBox groupBox2;
        private Button buttonLearnGXK;
        private Label label3;
        private TextBox textBoxPassword2;
        private Label label4;
        private TextBox textBoxUsername2;
        private DateTimePicker dateTimePicker1;
        private DateTimePicker dateTimePicker2;
        private Label label5;
        private Label label6;
        private Button button3;
        private CheckBox checkBox1;
        private NumericUpDown numericUpDown1;
        private TextBox textBoxServerURL;
        private Button button4;
    }
}