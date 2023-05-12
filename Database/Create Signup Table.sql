USE [Final_Project_Web]
GO

/****** Object:  Table [dbo].[SignUp]    Script Date: 2022-11-29 7:38:43 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SignUp](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Firstname] [varchar](50) NOT NULL,
	[Lastname] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[Phone_Number] [varchar](10) NOT NULL,
	[DOB] [date] NOT NULL,
	[Department] [varchar](50) NOT NULL,
	[Username] [varchar](50) NOT NULL,
	[Password] [varchar](50) NOT NULL,
	[Studentid] [varchar](10) NULL
) ON [PRIMARY]
GO


